"use client";

import { Header } from "@/components/Header";

import { Container } from "./styles";
import HomeSection from "@/components/HomeSection";
import AboutMeSection from "@/components/AboutMeSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import GoBackBtn from "@/components/GoBackBtn";
import { useDimentionsScroll } from "@/hooks/useDimentionsScroll";

export default function Home() {
	const { valueY } = useDimentionsScroll();

	return (
		<Container>
			<Header />
			<HomeSection />
			<AboutMeSection />
			<SkillsSection />
			<ProjectsSection />
			<Footer />

			{valueY > 762 && <GoBackBtn />}
		</Container>
	);
}
