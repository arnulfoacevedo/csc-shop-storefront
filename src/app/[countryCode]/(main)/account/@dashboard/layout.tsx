import LinkBar from "@modules/account/LinkBar";
import RouteBar from "@modules/account/RouteBar";

export default function DashboardLayout(props: { children: React.ReactNode }) {
    
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