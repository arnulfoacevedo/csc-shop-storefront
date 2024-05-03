import LinkBar from "@modules/account/LinkBar";
import RouteBar from "@modules/account/RouteBar";

type Props = {
    params: { countryCode: string,  }
}
export default async function PageLayout(props: { children: React.ReactNode, params: Props }) {
    // console.log(usePathname());
    
    return (
        <>
            <RouteBar />
            <div className="container lg:max-w-26 mx-auto mt-12 px-5">
                <LinkBar />
                {props.children}
            </div>
        </>
    )
}