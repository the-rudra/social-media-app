import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        alt="profile"
        width={size}
        height={size}
        src={`https://blossom-backend.onrender.com/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
