import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Carousel, Row, Col } from 'antd';
import styles from './IndexPage.css';

const { Header, Content, Footer } = Layout;

function IndexPage() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', width: '100%' }}>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ marginTop: 64 }}>
        <div style={{ background: '#fff', minHeight: 500 }} >
          <Carousel autoplay>
            <div className={styles.cat1}><h3 style={{ height: 500 }}>1</h3></div>
            <div className={styles.cat2}><h3 style={{ height: 500 }}>2</h3></div>
          </Carousel>
        </div>
        <div>
          <Row gutter={2}>
            <Col span={6}>
              <div className={styles.gutter_row} >col</div>
            </Col>
            <Col span={6}>
              <div className={styles.gutter_row} >col</div>
            </Col>
            <Col span={6}>
              <div className={styles.gutter_row} >col</div>
            </Col>
            <Col span={6}>
              <div className={styles.gutter_row} >col</div>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
