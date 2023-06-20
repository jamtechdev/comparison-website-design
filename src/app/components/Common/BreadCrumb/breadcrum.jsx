import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
export default function BreadCrumb() {
    return (
        <>

            <Breadcrumb className="breadcrumb-group">
                <Breadcrumb.Item className="breadcrumb-items" >Home</Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-items">
                    Blog Archive
                </Breadcrumb.Item>

            </Breadcrumb>

        </>
    )
}
