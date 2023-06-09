import React, { useState } from "react";
import {
	Box,
	Heading,
	SimpleGrid,
	Input,
	Button,
	Image,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import "./HomePage.css";

import Seat from "./Seat";

const HomePage = () => {
	const toast = useToast();
	const [userseat, setUserseat] = useState(0);
	const [seat, setSeat] = useState([
		[
			{ status: true, seatNo: "A1" },
			{ status: true, seatNo: "A2" },
			{ status: true, seatNo: "A3" },
			{ status: true, seatNo: "A4" },
			{ status: true, seatNo: "A5" },
			{ status: true, seatNo: "A6" },
			{ status: true, seatNo: "A7" },
		],
		[
			{ status: true, seatNo: "B1" },
			{ status: true, seatNo: "B2" },
			{ status: true, seatNo: "B3" },
			{ status: true, seatNo: "B4" },
			{ status: true, seatNo: "B5" },
			{ status: true, seatNo: "B6" },
			{ status: true, seatNo: "B7" },
		],
		[
			{ status: true, seatNo: "C1" },
			{ status: true, seatNo: "C2" },
			{ status: true, seatNo: "C3" },
			{ status: true, seatNo: "C4" },
			{ status: true, seatNo: "C5" },
			{ status: true, seatNo: "C6" },
			{ status: true, seatNo: "C7" },
		],
		[
			{ status: true, seatNo: "D1" },
			{ status: true, seatNo: "D2" },
			{ status: true, seatNo: "D3" },
			{ status: true, seatNo: "D4" },
			{ status: true, seatNo: "D5" },
			{ status: true, seatNo: "D6" },
			{ status: true, seatNo: "D7" },
		],
		[
			{ status: true, seatNo: "E1" },
			{ status: true, seatNo: "E2" },
			{ status: true, seatNo: "E3" },
			{ status: true, seatNo: "E4" },
			{ status: true, seatNo: "E5" },
			{ status: true, seatNo: "E6" },
			{ status: true, seatNo: "E7" },
		],
		[
			{ status: true, seatNo: "F1" },
			{ status: true, seatNo: "F2" },
			{ status: true, seatNo: "F3" },
			{ status: true, seatNo: "F4" },
			{ status: true, seatNo: "F5" },
			{ status: true, seatNo: "F6" },
			{ status: true, seatNo: "F7" },
		],
		[
			{ status: true, seatNo: "G1" },
			{ status: true, seatNo: "G2" },
			{ status: true, seatNo: "G3" },
			{ status: true, seatNo: "G4" },
			{ status: true, seatNo: "G5" },
			{ status: true, seatNo: "G6" },
			{ status: true, seatNo: "G7" },
		],
		[
			{ status: true, seatNo: "H1" },
			{ status: true, seatNo: "H2" },
			{ status: true, seatNo: "H3" },
			{ status: true, seatNo: "H4" },
			{ status: true, seatNo: "H5" },
			{ status: true, seatNo: "H6" },
			{ status: true, seatNo: "H7" },
		],
		[
			{ status: true, seatNo: "I1" },
			{ status: true, seatNo: "I2" },
			{ status: true, seatNo: "I3" },
			{ status: true, seatNo: "I4" },
			{ status: true, seatNo: "I5" },
			{ status: true, seatNo: "I6" },
			{ status: true, seatNo: "I7" },
		],
		[
			{ status: true, seatNo: "J1" },
			{ status: true, seatNo: "J2" },
			{ status: true, seatNo: "J3" },
			{ status: true, seatNo: "J4" },
			{ status: true, seatNo: "J5" },
			{ status: true, seatNo: "J6" },
			{ status: true, seatNo: "J7" },
		],
		[
			{ status: false, seatNo: "K1" },
			{ status: false, seatNo: "K2" },
			{ status: false, seatNo: "K3" },
			{ status: false, seatNo: "K4" },
			{ status: false, seatNo: "K5" },
			{ status: false, seatNo: "K6" },
			{ status: false, seatNo: "K7" },
		],
		[
			{ status: true, seatNo: "L1" },
			{ status: true, seatNo: "L2" },
			{ status: true, seatNo: "L3" },
		],
	]);
	const handleBookSeats = () => {
		if (userseat == 0) {
			toast({
				title: "Please Enter seat.",
				description: "Please Enter seat to move ahead.",
				status: "warning",
				position: "top-right",
				duration: 3000,
				isClosable: true,
			});
		}
		else if (userseat > 7) {
			toast({
				title: "Limit Exceeded.",
				description:
					"Please Enter within limit to continue.(less than or equal to 7 per user)",
				status: "warning",
				position: "top-right",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Booking Acknowledged.",
				description: "Please wait while we process your request.",
				status: "success",
				position: "top-right",
				duration: 3000,
				isClosable: true,
			});
		}
	};
	return (
		<Box m={"10px"}>
			<Box className="train">
				<Image src="https://www.animatedimages.org/data/media/75/animated-train-image-0046.gif" />
			</Box>
			<Heading>Unstop Booking App</Heading>
			<Input
				placeholder="Enter the Number of Seats to book"
				id="numberOfSeats"
				onChange={(e) => setUserseat(e.target.value)}
			/>
			<Button onClick={handleBookSeats} colorScheme="blue">
				Book Seat
			</Button>
			<SimpleGrid columns={3} spacing={10} m={"10px"}>
				{seat.map((el) => {
					return <Seat array={el} />;
				})}
			</SimpleGrid>
		</Box>
	);
};

export default HomePage;
