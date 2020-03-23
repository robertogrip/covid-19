import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Bar, Line, Pie } from 'react-chartjs-2';

import getBrazilData from './utils/Api';
import Card from './components/card/Card';
import Loading from './components/loading/Loading';

const App = () => {
  const [data, setData] = useState();

  const chartPieOptions = {
    legend: {
      labels: {
        fontColor: '#eee'
      }
    }
  };

  const chartLineOptions = {
    ...chartPieOptions,
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: '#eee'
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#eee'
          }
        }
      ]
    }
  };

  const chartBarOptions = {
    ...chartPieOptions,
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: '#eee',
            callback: function(value) {
              return value / 1e6 + 'M';
            }
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#eee'
          }
        }
      ]
    }
  };

  useEffect(() => {
    getBrazilData(json => json && setData(json.data));
  }, []);

  if (!data) return <Loading />;

  return (
    <Container>
      <Row className="page-top-cards">
        <Col xs="6" md="3">
          <Card
            title={'Novos casos'}
            value={(data.adddaily && data.adddaily.conadd) || '+0'}
          />
        </Col>
        <Col xs="6" md="3">
          <Card title={'Total de casos'} value={data.contotal || 0} />
        </Col>
        <Col xs="6" md="3">
          <Card title={'Total mortes'} value={data.deathtotal || 0} />
        </Col>
        <Col xs="6" md="3">
          <Card title={'Total curados'} value={data.curetotal || 0} />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Bar
            options={chartBarOptions}
            data={{
              labels: ['População', 'Casos', 'Mortes', 'Curados'],
              datasets: [
                {
                  label: 'População vs Casos vs Mortes vs Curados',
                  data: [data.population, data.contotal, data.deathtotal, data.curetotal],
                  backgroundColor: [
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(235, 235, 62, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(75, 235, 162, 0.8)'
                  ],
                  borderColor: 'rgba(200, 200, 200, 0.6)'
                }
              ]
            }}
          />
        </Col>
        <Col lg="6">
          <Pie
            options={chartPieOptions}
            data={{
              labels: ['Casos', 'Mortes', 'Curados'],
              datasets: [
                {
                  label: 'Distribuição do Corona',
                  data: [data.contotal, data.deathtotal, data.curetotal],
                  backgroundColor: [
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(75, 235, 162, 0.8)'
                  ],
                  borderColor: 'rgba(200, 200, 200, 0.6)'
                }
              ]
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Line
            options={chartLineOptions}
            data={{
              labels:
                data &&
                data.historylist &&
                data.historylist
                  .map(
                    history =>
                      `${history.date.split('.')[1]}/${
                        history.date.split('.')[0]
                      }`
                  )
                  .reverse(),
              datasets: [
                {
                  label: 'Número de casos',
                  data:
                    data &&
                    data.historylist &&
                    data.historylist
                      .map(history => parseInt(history.conNum))
                      .reverse(),
                  backgroundColor: 'rgba(54, 162, 235, 0.8)',
                  borderColor: 'rgba(200, 200, 200, 0.6)',
                  pointBorderColor: 'rgba(255, 255, 255, 0.8)'
                },
                {
                  label: 'Número de mortes',
                  data:
                    data &&
                    data.historylist &&
                    data.historylist
                      .map(history => parseInt(history.deathNum))
                      .reverse(),
                  backgroundColor: 'rgba(255, 99, 132, 0.8)',
                  borderColor: 'rgba(200, 200, 200, 0.6)',
                  pointBorderColor: 'rgba(255, 255, 255, 0.8)'
                },
                {
                  label: 'Número de curados',
                  data:
                    data &&
                    data.historylist &&
                    data.historylist
                      .map(history => parseInt(history.cureNum))
                      .reverse(),
                  backgroundColor: 'rgba(75, 235, 162, 0.8)',
                  borderColor: 'rgba(200, 200, 200, 0.6)',
                  pointBorderColor: 'rgba(255, 255, 255, 0.8)'
                }
              ]
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
