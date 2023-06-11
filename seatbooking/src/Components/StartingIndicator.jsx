import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const StartingIndicater = () => {
	return (
		<Box>
			<Heading>Welcome to Unstop Booking App</Heading>
			<Image
				src={
					"https://i.pinimg.com/originals/e3/94/3e/e3943ed327e89ca3532203fbfb89f2ba.gif"
				}
				alt="Gif"
				//boxSize="590px"
				objectFit="cover"
				justifyContent={"center"}
				margin={"auto"}
			/>
		</Box>
	);
};

export default StartingIndicater;
