export const getAllFiles = async (req, res) => {
  try {
    console.log("--------Inside getAll files");

    res.status(200).json({
      message: "File fetched successfully",
      data: [1, 2, 3, 4, 56, 789, 345],
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
