import Bush from "@/assets/icons/bush.svg";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import GoBackBtn from "@/components/GoBackBtn";
import HomeSection from "@/components/HomeSection";
import { getDictionary } from "../../../dictionaries";
import SkillsSection from "@/components/SkillsSection";
import AboutMeSection from "@/components/AboutMeSection";
import ProjectsSection from "@/components/ProjectsSection";

import { Background, Container, Content } from "./styles";
import { Locale } from "@/i18n.config";

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);

	return (
		<Container>
			<Content>
				<Header texts={dictionary.header} />
				<HomeSection texts={dictionary.main} />
				<AboutMeSection texts={dictionary.aboutMe} />
				<SkillsSection texts={dictionary.skills} />
				<ProjectsSection texts={dictionary.projects} />
				<Footer />
				<GoBackBtn />
			</Content>
			<Background src={Bush} alt="Flor" />
		</Container>
	);
}
