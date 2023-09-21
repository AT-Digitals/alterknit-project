import { Box, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Top from "../../assets/services_faqs_bg_top.svg";
import Bottom from "../../assets/services_faqs_bg_bottom.svg";

export default function FaqPage() {
  const [showTextField, setShowTextField] = useState(true);
  const [showField, setShowField] = useState(true);
  const [showText, setText] = useState(true);
  const [showName, setName] = useState(true);
  const [showPara, setPara] = useState(true);
  const [showPage, setPage] = useState(true);
  const [showRow, setRow] = useState(true);
  const [showFields, setFields] = useState(true);
  const [showTextName, setTextName] = useState(true);
  const [showFieldName, setFieldName] = useState(true);
  const [showFieldText, setFieldText] = useState(true);
  const [isAddIcon, setIsAddIcon] = useState(true);
  const [AddsIcon, setAddsIcon] = useState(true);
  const [isMinusIcon, setIsMinusIcon] = useState(true);
  const [MinusIcon, setMinusIcon] = useState(true);
  const [Icon, setIcon] = useState(true);
  const [AddIcon, setAddIcon] = useState(true);
  const [AddIcons, setAddIcons] = useState(true);
  const [MinusIcons, setMinusIcons] = useState(true);
  const [AddOnIcons, setAddOnIcons] = useState(true);
  const [MinusOnIcons, setMinusOnIcons] = useState(true);
  const [OnIcons, setOnIcons] = useState(true);

  const handleEdit = () => {
    setShowTextField(false);
    setIsAddIcon(false);
  };

  const handle = () => {
    setShowTextField(true);
    setIsAddIcon(true);
  };

  const handlesEdit = () => {
    setShowField(false);
    setAddsIcon(false);
  };

  const handleAddIcon = () => {
    setShowField(true);
    setAddsIcon(true);
  };

  const handleClick = () => {
    setText(false);
    setIsMinusIcon(false);
  };

  const handleMinusIcon = () => {
    setText(true);
    setIsMinusIcon(true);
  };

  const handlesClick = () => {
    setName(false);
    setMinusIcon(false);
  };

  const handleIsMinusIcon = () => {
    setName(true);
    setMinusIcon(true);
  };

  const handleChange = () => {
    setPara(false);
    setIcon(false);
  };

  const handleIcons = () => {
    setPara(true);
    setIcon(true);
  };

  const handlesChange = () => {
    setPage(false);
    setAddIcon(false);
  };

  const handleAdd = () => {
    setPage(true);
    setAddIcon(true);
  };

  const handleSubmit = () => {
    setRow(false);
    setAddIcons(false);
  };

  const handleAdds = () => {
    setRow(true);
    setAddIcons(true);
  };

  const handlesSubmit = () => {
    setFields(false);
    setMinusIcons(false);
  };

  const handleMinuses = () => {
    setFields(true);
    setMinusIcons(true);
  };

  const handleIcon = () => {
    setTextName(false);
    setAddOnIcons(false);
  };

  const handleOnAdd = () => {
    setTextName(true);
    setAddOnIcons(true);
  };

  const handlesIcon = () => {
    setFieldName(false);
    setMinusOnIcons(false);
  };

  const handleOnMinus = () => {
    setFieldName(true);
    setMinusOnIcons(true);
  };

  const handleSend = () => {
    setFieldText(false);
    setOnIcons(false);
  };

  const handleOnIcon = () => {
    setFieldText(true);
    setOnIcons(true);
  };

  return (
    <>
      <img src={Top} alt="top-file" />
      <Box
        sx={{
          backgroundColor: "#f8f1eb",
        }}
      >
        <Box maxWidth={"1200px"} margin={"0px 90px"}>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography color={"black"} fontWeight={"bold"} fontSize={"45px"}>
              FAQ'S
            </Typography>
          </Box>
          <Box
            sx={{
              "&:hover": {
                color: "#df7c6d",
              },
            }}
            marginBottom={"15px"}
            borderBottom={"2px solid black"}
            marginTop={"50px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontWeight={"600"} fontSize={"30px"}>
              Can I Bring My Items To Your Shop In Queens, New York?
            </Typography>
            {isAddIcon ? (
              <AddCircleIcon
                onClick={handleEdit}
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              />
            ) : (
              <RemoveCircleIcon
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
                onClick={handle}
              />
            )}
          </Box>
          {!showTextField && (
            <Typography color={"#575656"} fontWeight={"500"} fontSize={"20px"}>
              We know you would like to visit but due to the high intensity
              nature of the service we provide, we do not accept walk-ins.
            </Typography>
          )}
          <Box
            sx={{
              "&:hover": {
                color: "#df7c6d",
              },
            }}
            marginBottom={"15px"}
            borderBottom={"2px solid black"}
            marginTop={"50px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontWeight={"600"} fontSize={"30px"}>
              How Do You Match The Yarn So It Looks Invisible?
            </Typography>
            {AddsIcon ? (
              <AddCircleIcon
                onClick={handlesEdit}
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              />
            ) : (
              <RemoveCircleIcon
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
                onClick={handleAddIcon}
              />
            )}
          </Box>
          {!showField && (
            <Typography color={"#575656"} fontWeight={"500"} fontSize={"20px"}>
              First we invisibly 'harvest' the yarn from the garment itself. We
              also have an extensive in-house fiber library.
            </Typography>
          )}
          <Box
            sx={{
              "&:hover": {
                color: "#df7c6d",
              },
            }}
            marginBottom={"15px"}
            borderBottom={"2px solid black"}
            marginTop={"50px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontWeight={"600"} fontSize={"30px"}>
              Can You Get Stains Out?
            </Typography>
            {isMinusIcon ? (
              <AddCircleIcon
                onClick={handleClick}
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              />
            ) : (
              <RemoveCircleIcon
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
                onClick={handleMinusIcon}
              />
            )}
          </Box>
          {!showText && (
            <Typography color={"#575656"} fontWeight={"500"} fontSize={"20px"}>
              Yes we can.
            </Typography>
          )}
          <Box
            sx={{
              "&:hover": {
                color: "#df7c6d",
              },
            }}
            marginBottom={"15px"}
            borderBottom={"2px solid black"}
            marginTop={"50px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontWeight={"600"} fontSize={"30px"}>
              I Have A Torn Neckline — Can You Reattach It?
            </Typography>
            {MinusIcon ? (
              <AddCircleIcon
                onClick={handlesClick}
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              />
            ) : (
              <RemoveCircleIcon
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
                onClick={handleIsMinusIcon}
              />
            )}
          </Box>
          {!showName && (
            <Typography color={"#575656"} fontWeight={"500"} fontSize={"20px"}>
              Yes, this is a very common repair.
            </Typography>
          )}
          <Box
            sx={{
              "&:hover": {
                color: "#df7c6d",
              },
            }}
            marginBottom={"15px"}
            borderBottom={"2px solid black"}
            marginTop={"50px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontWeight={"600"} fontSize={"30px"}>
              Do You Shorten Sweaters?
            </Typography>
            {Icon ? (
              <AddCircleIcon
                onClick={handleChange}
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              />
            ) : (
              <RemoveCircleIcon
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
                onClick={handleIcons}
              />
            )}
          </Box>
          {!showPara && (
            <Typography color={"#575656"} fontWeight={"500"} fontSize={"20px"}>
              Yes, we shorten all body lengths as well as sleeve length while
              maintaining the original hem detail.
            </Typography>
          )}
          <Box
            sx={{
              "&:hover": {
                color: "#df7c6d",
              },
            }}
            marginBottom={"15px"}
            borderBottom={"2px solid black"}
            marginTop={"50px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontWeight={"600"} fontSize={"30px"}>
              What Brands Do You Repair?
            </Typography>
            {AddIcon ? (
              <AddCircleIcon
                onClick={handlesChange}
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              />
            ) : (
              <RemoveCircleIcon
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
                onClick={handleAdd}
              />
            )}
          </Box>
          {!showPage && (
            <Typography color={"#575656"} fontWeight={"500"} fontSize={"20px"}>
              If you love it we fix it! All brands are welcome.
            </Typography>
          )}
          <Box
            sx={{
              "&:hover": {
                color: "#df7c6d",
              },
            }}
            marginBottom={"15px"}
            borderBottom={"2px solid black"}
            marginTop={"50px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontWeight={"600"} fontSize={"30px"}>
              Can I Get A Repair Estimate Before I Submit My Order?
            </Typography>
            {AddIcons ? (
              <AddCircleIcon
                onClick={handleSubmit}
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              />
            ) : (
              <RemoveCircleIcon
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
                onClick={handleAdds}
              />
            )}
          </Box>
          {!showRow && (
            <Typography color={"#575656"} fontWeight={"500"} fontSize={"20px"}>
              You can email us, or text, or chatbot pictures for us to see if
              your items are a good candidate for the services we provide. We
              cannot give any estimates or ballparks before we see your
              particular item in our studio. Please don't tell us it's just a
              small hole, we know it may appear to be just small or only one
              hole but what you see and what we see maybe two different things.
              Remember all invisible repairs are done by hand and are time
              intensive. Our promise is to provide a complete restoration so we
              need to give it an in-house exam.
            </Typography>
          )}
          <Box
            sx={{
              "&:hover": {
                color: "#df7c6d",
              },
            }}
            marginBottom={"15px"}
            borderBottom={"2px solid black"}
            marginTop={"50px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontWeight={"600"} fontSize={"30px"}>
              Your Pictures Look Amazing, Are They Real?
            </Typography>
            {MinusIcons ? (
              <AddCircleIcon
                onClick={handlesSubmit}
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              />
            ) : (
              <RemoveCircleIcon
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
                onClick={handleMinuses}
              />
            )}
          </Box>
          {!showFields && (
            <Typography color={"#575656"} fontWeight={"500"} fontSize={"20px"}>
              We get that question a lot and we are proud to say YES! What you
              see is what you get, we provide top shelf repairs the old
              fashioned way stitch by stitch.
            </Typography>
          )}
          <Box
            sx={{
              "&:hover": {
                color: "#df7c6d",
              },
            }}
            marginBottom={"15px"}
            borderBottom={"2px solid black"}
            marginTop={"50px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontWeight={"600"} fontSize={"30px"}>
              Do You Receive Orders From Outside Of The United States?
            </Typography>
            {AddOnIcons ? (
              <AddCircleIcon
                onClick={handleIcon}
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              />
            ) : (
              <RemoveCircleIcon
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
                onClick={handleOnAdd}
              />
            )}
          </Box>
          {!showTextName && (
            <Typography color={"#575656"} fontWeight={"500"} fontSize={"20px"}>
              Yes. We use USPS with tracking to deliver your order back to you.
              You can also include a pre paid return shipping label in with your
              order.
            </Typography>
          )}
          <Box
            sx={{
              "&:hover": {
                color: "#df7c6d",
              },
            }}
            marginBottom={"15px"}
            borderBottom={"2px solid black"}
            marginTop={"50px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontWeight={"600"} fontSize={"30px"}>
              How Long Will The Repairs Take?
            </Typography>
            {MinusOnIcons ? (
              <AddCircleIcon
                onClick={handlesIcon}
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              />
            ) : (
              <RemoveCircleIcon
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
                onClick={handleOnMinus}
              />
            )}
          </Box>
          {!showFieldName && (
            <Typography color={"#575656"} fontWeight={"500"} fontSize={"20px"}>
              Once you approve the repair quote and provide payment you can
              expect to wait approximately 4 weeks for your repair to be
              completed. However the length of time depends on the complexity of
              the work.
            </Typography>
          )}
          <Box
            sx={{
              "&:hover": {
                color: "#df7c6d",
              },
            }}
            marginBottom={"15px"}
            borderBottom={"2px solid black"}
            marginTop={"50px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontWeight={"600"} fontSize={"30px"}>
              What If I Decide I Do Not Want To Proceed With The Repair?
            </Typography>
            {OnIcons ? (
              <AddCircleIcon
                onClick={handleSend}
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              />
            ) : (
              <RemoveCircleIcon
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
                onClick={handleOnIcon}
              />
            )}
          </Box>
          {!showFieldText && (
            <Typography color={"#575656"} fontWeight={"500"} fontSize={"20px"}>
              If after receiving your quote you decline service we return your
              items to you. You are responsible for all applicable delivery
              fees.
            </Typography>
          )}
        </Box>
      </Box>
      <img src={Bottom} alt="bottom file" />
    </>
  );
}
