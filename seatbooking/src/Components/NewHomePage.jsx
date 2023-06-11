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
import axios from "axios";
import Seat from "./Seat";

const NewHomePage = () => {
	const toast = useToast();
	const [userseat, setUserseat] = useState(0);
	const [seat, setSeat] = useState([]);
	let row = 1;

	const getseat = async () => {
		axios
			.get(`http://localhost:8080/coach/ticket`)
			.then((res) => {
				setSeat(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		getseat();
	}, []);
	const handleReset = () => {
		axios
			.get(`http://localhost:8080/coach/delete`)
			.then((res) => {
				toast({
					title: "All seats reset.",
					description: "seats Have been reset Please continue booking.",
					status: "success",
					position: "top-right",
					duration: 3000,
					isClosable: true,
				});
				getseat();
			})
			.catch((err) => {
				toast({
					title: "Something went wrong.",
					description: "Seats counld not be reset. Work under progress",
					status: "failurer",
					position: "top-right",
					duration: 3000,
					isClosable: true,
				});
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
					res.data.seat
						? toast({
								title: "Booking Successfull.",
								description: `${res.data.seat}`,
								status: "success",
								position: "top-right",
								duration: 3000,
								isClosable: true,
						  })
						: toast({
								title: "Booking Unsuccessfull.",
								description: `${res.data}`,
								status: "warning",
								position: "top-right",
								duration: 3000,
								isClosable: true,
						  });
					getseat();
				})
				.catch((err) => {
					toast({
						title: "Booking Unsuccessfull.",
						description: `${err}`,
						status: "failure",
						position: "top-right",
						duration: 3000,
						isClosable: true,
					});
				});
		}
	};
	return (
		<Box
			m={"10px"}
            paddingTop={"10px"}
			backgroundImage={
				"https://e0.pxfuel.com/wallpapers/934/924/desktop-wallpaper-airplane-macbook-best-flights-best-airlines-air-tickets-alaska-airlines.jpg"
			}
			backgroundRepeat={"no-repeat"}
			backgroundSize={"100%"}
		>
			<Box m={"10px"}>
				<Input
					placeholder="Enter the Number of Seats to book"
					id="numberOfSeats"
					onChange={(e) => setUserseat(e.target.value)}
					width={"50%"}
				/>
			</Box>

			<Button onClick={handleBookSeats} colorScheme="blue" marginRight={"10px"}>
				Book Seat
			</Button>
			<Button onClick={handleReset} colorScheme="blue">
				Reset Seats
			</Button>
			<Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
				<SimpleGrid
					m={"10px"}
					columns={{ base: 1, md: 7 }}
					spacing={{ base: 5, lg: 8 }}
				>
					<Heading>START</Heading>
					{seat.map((el) => (
						<Seat array={el} row={row++} />
					))}
					<Heading>STOP</Heading>
				</SimpleGrid>
			</Box>
		</Box>
	);
};

export default NewHomePage;
