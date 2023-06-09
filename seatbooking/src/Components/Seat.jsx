import React from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { calcLength } from "framer-motion";

const Seat = ({ array }) => {
	return (
		<Box >
			{array.map((el) => {
				if (el.status) {
					return (
						<Button colorScheme="green" marginLeft={"5px"}>
							{el.seatNo}
						</Button>
					);
				} else {
					return (
						<Button colorScheme="red" marginLeft={"5px"} isDisabled>
							{el.seatNo}
						</Button>
					);
				}
			})}
		</Box>
	);
};

export default Seat;
