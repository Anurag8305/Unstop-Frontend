import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const Seat = ({ array, row }) => {
	let count = 1;
	return (
		<Box columns={7} spacing={10} p={"5px"} boxShadow={"2xl"}>
			<Text fontSize={"20px"} color={"white"}>
				Row {row}
			</Text>
			{array.map((el) =>
				el ? (
					<Button colorScheme="red" m={"5px"} isDisabled>
						{count++}
					</Button>
				) : (
					<Button colorScheme="green" m={"5px"}>
						{count++}
					</Button>
				)
			)}
		</Box>
	);
};

export default Seat;
