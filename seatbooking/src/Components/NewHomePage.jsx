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

const NewHomePage = () => {
	const toast = useToast();
	const [userseat, setUserseat] = useState(0);
	const [seat, setSeat] = useState([]);
	const [count, setCount] = useState(1);
	console.log(process.env.BASE_URL);
	const getseat = async () => {
		axios
			.get(`http://localhost:8080/coach/ticket`)
			.then((res) => {
				console.log(res.data);
				setSeat(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		axios
			.get(`http://localhost:8080/coach/coach`)
			.then((res) => {
				toast({
					title: "New Booking Started.",
					description: "All Seats are vacant Please start Booking.",
					status: "success",
					position: "top-right",
					duration: 3000,
					isClosable: true,
				});
			})
			.catch((err) => {
				console.log(err);
			});
		getseat();
	}, []);
	const handlereset = () => {
		axios.get(`http://localhost:8080/coach/coach`).then((res) => {
			console.log(res);
			toast({
				title: "All seats reset.",
				description: "seats Have been reset Please continue booking.",
				status: "success",
				position: "top-right",
				duration: 3000,
				isClosable: true,
			});
			getseat();
		});
	};
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
			axios
				.post(`http://localhost:8080/coach/ticket`, {
					number_of_seats: userseat,
				})
				.then((res) => {
					console.log(res);
					toast({
						title: "Booking Successfull.",
						description: `${res.data.seat}`,
						status: "success",
						position: "top-right",
						duration: 3000,
						isClosable: true,
					});
					getseat();
				})
				.catch((err) => {
					console.log(err);
					toast({
						title: "Booking Unsuccessfull.",
						description: `${err.message}`,
						status: "failure",
						position: "top-right",
						duration: 3000,
						isClosable: true,
					});
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
			<Button onClick={handlereset} colorScheme="pink">
				Reset All Seats
			</Button>
			<SimpleGrid columns={7} spacing={10} m={"10px"}>
				{/* {seat.map((el) => (
                    el.map((subel)=>(
                        subel.status==="false"?(<Button colorScheme="blue" marginLeft={"5px"}>
							{count++}
						</Button>):(<Button colorScheme="red" marginLeft={"5px"} isDisabled >
							{count++}
						</Button>)
                    ))
					
				))} */}
				{seat.map((el) => {
					return <Seat array={el} />;
				})}
			</SimpleGrid>
		</Box>
	);
};

export default NewHomePage;
