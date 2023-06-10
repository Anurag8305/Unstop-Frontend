import React, { useEffect, useState } from "react";
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
import axios from "axios";
import Seat from "./Seat";

const HomePage = () => {
	const toast = useToast();
	const [userseat, setUserseat] = useState(0);
	const [seat, setSeat] = useState([]);

	console.log(process.env.BASE_URL);
	const getseat = async () => {
		axios
			.get(`http://localhost:8080/rows`)
			.then((res) => {
				setSeat(res.data)
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		getseat();
	}, []);
	const handleBookSeats = () => {
		if (userseat === 0) {
			toast({
				title: "Please Enter seat.",
				description: "Please Enter seat to move ahead.",
				status: "warning",
				position: "top-right",
				duration: 3000,
				isClosable: true,
			});
		} else if (userseat > 7) {
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
					return <Seat array={el.seats}  />;
				})}
			</SimpleGrid>
		</Box>
	);
};

export default HomePage;
