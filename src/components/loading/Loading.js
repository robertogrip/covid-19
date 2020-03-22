import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Skeleton from '@yisheng90/react-loading';

const Loading = () => {
    return (
        <Container>
            <Row>
                <Col><Skeleton className="skeleton" height="97px" /></Col>
                <Col><Skeleton className="skeleton" height="97px" /></Col>
                <Col><Skeleton className="skeleton" height="97px" /></Col>
                <Col><Skeleton className="skeleton" height="97px" /></Col>
            </Row>
            <Row>
                <Col><Skeleton className="skeleton" height="270px" /></Col>
                <Col><Skeleton className="skeleton" height="270px" circle /></Col>
            </Row>
            <Row>
                <Col><Skeleton className="skeleton" height="530px" /></Col>
            </Row>
        </Container>
    )
};

export default Loading;