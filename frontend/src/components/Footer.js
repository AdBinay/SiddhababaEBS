//rfce

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1
				style={{
					color: "white",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
				Siddhababa English Boarding School <br/> 
        <h5 
        style={{
					color: "white",
					textAlign: "center",
					marginTop: "10px",
				}}>Chapakot Municipality-03, Shyangja</h5> <hr/>
			</h1>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>Our Goals</Heading>
						<FooterLink href="#">
							Our Mission
						</FooterLink>
						<FooterLink href="#">
							Vision
						</FooterLink>
						<FooterLink href="#">
							Objectives
						</FooterLink>
					</Column>
					<Column>
						<Heading>Information </Heading>
						<FooterLink href="#">
							Downloads
						</FooterLink>
						<FooterLink href="#">
							Curriculams
						</FooterLink>
						<FooterLink href="#">
							Testimonials
						</FooterLink>
						<FooterLink href="/faculty">
							Teaching Faculty
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contact us : </Heading>
						<FooterLink href="#">
							phone : <br/> +977-9806519672
						</FooterLink>
						<FooterLink href="#">
							Email : <br/> binayadh77@gmail.com
						</FooterLink>
					</Column>
					<Column>
						<Heading> Social Media </Heading> 
						<FooterLink href="#">
              Facebook
						</FooterLink>
					</Column>
				</Row> <hr/> 
			</FooterContainer>
		</Box>
	);
};
export default Footer;
