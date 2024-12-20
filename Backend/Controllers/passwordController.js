import passwordModel from "../Models/passModel.js";

export const getPassword = async (req, res) => {
  const userid = req.user?._id;
  try {
    const allPassword = await passwordModel.find({ Author: userid });
    res.send({ success: true, message: "Get all passwords" });
  } catch (error) {}
};

export const postPassword = async (req, res) => {
  const userid = req.user?._id;
  const { title, password } = req.body;

  try {
    if (!title || !password) {
      res.send({ success: false, message: "All fields are required" });
    }

    const newPassword = new passwordModel({
      title,
      password,
      Author: userid,
    });
    await newPassword.save();
    res.send({
      success: true,
      data: newPassword,
      message: "Password saved successfully",
    });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: "Error in saving password" });
  }
};

// export const postPassword = async (req, res) => {
//   const userid = req.user?._id;
//   const { title, password } = req.body;
//   try {
//     if (!title || !password) {
//       return res.send({ success: false, message: "please fill all field" });
//     }

//     const newpassword = new passwordModel({
//       title,
//       password,
//       Author: userid,
//     });

//     await newpassword.save();

//     return res.send({
//       success: true,
//       data: newpassword,
//       message: "password save successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.send({ success: false, message: error.message });
//   }
// };

export const updatePassword = async (req, res) => {
  const userid = req.user?._id;
  const pwid = req.params;
  const { title, password } = req.body;
  try {
    if (!title || !password) {
      res.send({ success: false, message: "All fields are required" });
    }

    const updatePassword = await passwordModel.findOneAndUpdate(
      { _id: id, Author: userid },
      {
        $set: {
          title,
          password,
        },
      },
      { new: true }
    );
    res.send({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: "Error in updating password" });
  }
};

export const deletePassword = async (req, res) => {
  const userid = req.user?._id;
  const pwid = req.params;
  try {
    await passwordModel.findOneAndDelete({ _id: id, Author: userid });
    res.send({ success: true, message: "Password deleted successfully" });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: "Error in deleting password" });
  }
};
