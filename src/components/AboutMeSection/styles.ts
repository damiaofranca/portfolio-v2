import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	display: flex;
	padding: 64px 24px;
	align-items: center;
	flex-direction: column;
	@media screen and (max-width: 690px) {
		& {
			padding: 20px 26px;
		}
	}
`;

export const ContainerIntruction = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 690px) {
		& {
			align-items: center;
			flex-direction: column;
		}
	}
`;

export const Experience = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 690px) {
		& {
			align-items: center;
			flex-direction: column;
		}
	}
`;

export const Photo = styled(Image)`
	width: 100%;
	height: 460px;
	max-width: 340px;
	object-fit: cover;
	margin-right: 60px;
	border-radius: 14px;
	background-color: gray;

	@media screen and (max-width: 768px) {
		& {
			height: 420px;
			max-width: 260px;
			margin-right: 32px;
		}
	}

	@media screen and (max-width: 690px) {
		& {
			display: none;
			/* height: 380px;
			max-width: 260px;
			margin-top: 24px;
			margin-right: 0px; */
		}
	}
`;

export const InformationsWrapper = styled.div`
	display: flex;
	max-width: 460px;
	flex-direction: column;

	@media screen and (max-width: 690px) {
		& {
			order: -1;
			align-items: center;
		}
	}
`;

export const Introdution = styled.div`
	margin-bottom: 4rem;

	@media screen and (max-width: 690px) {
		& {
			margin-bottom: 2.3rem;
		}
	}
`;

export const Title = styled.h1`
	color: #4d4e52;
	font-size: 2.25rem;
	font-weight: 600;

	@media screen and (max-width: 768px) {
		& {
			font-size: 1.8rem;
		}
	}

	@media screen and (max-width: 690px) {
		& {
			font-size: 1.4rem;
			text-align: center;
		}
	}
`;

export const TextInfo = styled.p`
	color: #4d4e52;
	margin-bottom: 12px;

	@media screen and (max-width: 768px) {
		& {
			font-size: 0.78rem;
		}
	}
	@media screen and (max-width: 690px) {
		& {
			text-align: center;
			margin-bottom: 24px;
		}
	}
`;

export const InformationsBtn = styled.a`
	color: #fff;
	display: flex;
	cursor: pointer;
	font-weight: 500;
	font-size: 13.3px;
	width: fit-content;
	padding: 12px 12px;
	align-items: center;
	border-radius: 0.5rem;
	text-decoration: none;
	background-color: #6997ff;
	transition: all 0.1s ease-in-out;

	&:hover,
	&:focus {
		background-color: #8baeff;
		outline: 3px solid #cedaf5;
	}

	@media screen and (max-width: 768px) {
		& {
			font-size: 0.8rem;
		}
	}

	@media screen and (max-width: 690px) {
		& {
			margin: 0;
		}
	}
`;
export const ContainerJobs = styled.div`
display: flex;
margin-top: 56px;
justify-content: center;



@media screen and (max-width: 860px) {
		& {
			align-items: center;
			flex-direction: column;
		}

		& .divider{
			display: none;
		}

		& .last{
	margin-top: 80px !important;
		}
	}
`

export const Divider = styled.div`
width: 1px;
margin: 0 60px;
min-height: 900px;
background-color: #e7e7e7;
` 


export const Card = styled.div`
max-width: 500px;
min-height: 490px;
padding: 18px 24px;
height: fit-content;
border-radius: 14px;
background-color: #efefef;

&.last{
	margin-top: 180px;
}
`



export const TitleJob = styled.h4`
	color: #4d4e52;
	font-weight: 600;
	font-size: 1.46rem;
	margin-bottom: 6px;

	@media screen and (max-width: 768px) {
		& {
			font-size: 1.5rem;
		}
	}

	@media screen and (max-width: 690px) {
		& {
			font-size: 1.15rem;
		}
	}
`;



export const CompanyName = styled.h4`
	color: #a4a4a5;
	font-size: 1rem;
	font-weight: 300;
    line-height: 24px;
    letter-spacing: 2px;

	@media screen and (max-width: 768px) {
		& {
			font-size: 0.96rem;
		}
	}

	
`;


export const ListJob =styled.ul`
margin-top: 16px;
margin-left: 20px;

& > li {
	color: #a4a4a5;
	margin: 10px 0;
	list-style-type: circle;

	& span{
		color: #a4a4a5;
		font-weight: 300;
		margin-left: 6px;
		line-height: 24px;
		font-size: 0.96rem;
	}
}


@media screen and (max-width: 690px) {
	& > li {
		& span{
		font-size: 0.86rem;
	}
}

}
`