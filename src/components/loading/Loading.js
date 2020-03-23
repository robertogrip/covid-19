import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Skeleton from '@yisheng90/react-loading';

const Loading = () => {
    return (
        <Container>
            <Row>
                <Col xs="6" md="3"><Skeleton className="skeleton" height="97px" /></Col>
                <Col xs="6" md="3"><Skeleton className="skeleton" height="97px" /></Col>
                <Col xs="6" md="3"><Skeleton className="skeleton" height="97px" /></Col>
                <Col xs="6" md="3"><Skeleton className="skeleton" height="97px" /></Col>
            </Row>
            <Row>
                <Col lg="6"><Skeleton className="skeleton" height="270px" /></Col>
                <Col lg="6"><Skeleton className="skeleton" height="270px" circle /></Col>
            </Row>
            <Row>
                <Col><Skeleton className="skeleton" height="530px" /></Col>
            </Row>
        </Container>
    )
};

export default Loading;