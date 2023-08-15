import { RequireSiteAdmin } from '@/components/utils';
import ReadyNavBar from '@/components/common/nav/ReadyNavBar';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<RequireSiteAdmin>
			{children}
		</RequireSiteAdmin>);
}
