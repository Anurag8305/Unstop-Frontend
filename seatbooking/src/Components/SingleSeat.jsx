import React from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";

const SingleSeat = ({ status, seat }) => {
	return (
		<div>
			{status ? (
				<Button colorScheme="green" marginLeft={"5px"}>
					{seat}
				</Button>
			) : (
				<Button colorScheme="green" marginLeft={"5px"}>
					{seat}
				</Button>
			)}
		</div>
	);
};

export default SingleSeat;
