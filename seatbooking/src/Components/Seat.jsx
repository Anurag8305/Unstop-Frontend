import React from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { calcLength } from "framer-motion";
import SingleSeat from "./SingleSeat";

const Seat = ({ array }) => {
	let count=1
	return (
		<Box border={"1px solid red"} p={"5px"}>
			{/* {array.length >0 && array.map((el)=>(
				el.map((subel)=>(
					subel.status?(<Button colorScheme="green" marginLeft={"5px"}>
							{subel.seatNo}
						</Button>):(<Button colorScheme="red" marginLeft={"5px"} isDisabled >
							{subel.seatNo}
						</Button>)
				))
			) 
			)} */}
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
