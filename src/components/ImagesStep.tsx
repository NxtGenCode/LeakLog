import { Typography, Box, ButtonBase } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React from "react";

import type { ReportFormData } from "../pages/ReportEditorPage";

type Props = {
  formData: ReportFormData;
  setFormData: React.Dispatch<React.SetStateAction<ReportFormData>>;
};

export default function ImagesStep({ formData, setFormData }: Props) {
  const files = formData.images.files;

  const [previews, setPreviews] = React.useState<
  { file: File; url: string }[]
>([]);

React.useEffect(() => {
  if (!files || files.length === 0) {
    setPreviews([]);
    return;
  }

  const newPreviews = files.map((file) => ({
    file,
    url: URL.createObjectURL(file),
  }));

  setPreviews(newPreviews);

  return () => {
    newPreviews.forEach((preview) =>
      URL.revokeObjectURL(preview.url)
    );
  };
}, [files]);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;

    const newFiles = Array.from(fileList);

    setFormData((prev) => ({
      ...prev,
      images: {
        ...prev.images,
        files: [...prev.images.files, ...newFiles],
      },
    }));
  };

  const handleRemove = (index: number) => {
    setFormData((prev) => {
      const updatedFiles = [...prev.images.files];
      updatedFiles.splice(index, 1);

      return {
        ...prev,
        images: {
          ...prev.images,
          files: updatedFiles,
        },
      };
    });
  };

  return (
    <Box
      display="flex"
      width="100%"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          mt: "12px",
          minHeight: { xs: "100dvh", md: "100vh" },
          width: { xs: "95%", sm: "100%", md: "50%" },
        }}
      >
        <Typography color="white">
          Job Photos
          <br />
          Upload photos documenting the leak and any damages.
        </Typography>

        {/* Upload Area */}
        <Box
          width="100%"
          bgcolor="#1A1B1E"
          borderRadius="12px"
          sx={{
            display: "flex",
            flexDirection: "column",
            p: "12px",
            mb: "12px",
            alignItems: "center",
          }}
        >
          <ButtonBase
            component="label"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#1A1B1E",
              borderRadius: "12px",
              p: 3,
              width: "100%",
              maxWidth: 400,
              textAlign: "center",
              "&:hover": { bgcolor: "#2a2b2f" },
              cursor: "pointer",
            }}
          >
            <CloudUploadIcon sx={{ fontSize: 120, color: "#1976d2" }} />

            <Typography sx={{ color: "white", pt: 1, pb: 0.5 }}>
              TAP TO UPLOAD IMAGES
            </Typography>

            <Typography sx={{ color: "white", fontSize: 12 }}>
              PNG, JPG up to 10MB
            </Typography>

            <input
              type="file"
              hidden
              multiple
              accept="image/png, image/jpeg"
              onChange={(e) => handleFiles(e.target.files)}
            />
          </ButtonBase>
        </Box>

        {/* Image Preview Grid */}
        {previews.length > 0 && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 2,
              bgcolor: "#1A1B1E",
              p: 2,
              borderRadius: "12px",
            }}
          >
            {previews.map((preview, index) => (
              <Box
                key={preview.url}
                sx={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={preview.url}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <Box
                  onClick={() => handleRemove(index)}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    bgcolor: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  ✕
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    bgcolor: "rgba(0,0,0,0.6)",
                    color: "white",
                    px: 1,
                    py: 0.5,
                    fontSize: 12,
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {preview.file.name}
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}