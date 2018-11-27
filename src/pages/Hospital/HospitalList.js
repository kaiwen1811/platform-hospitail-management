import React, { Component } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Table, Button } from 'antd';
import styles from './styles.less';

@connect(({ hospital, loading }) => ({
  hospital,
  loading: loading.effects['hospital/fetch'],
}))

class HospitalList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.columns = [{
      title: '医院名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '医院编码',
      dataIndex: 'code',
      key: 'code',
    }, {
      title: '联系电话',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: '所在地址',
      key: 'address',
      dataIndex: 'address',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span
          onClick={() => { router.push(`/hospital/hospital-detail?type=update&id=${record.id}`) }}
          className='tableLink'
        >
          修改
        </span>
      ),
    }];
  }

  componentDidMount() {
    this.getHospitalList()
  }

  getHospitalList = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'hospital/fetch',
    });
  }
  

  render() {
    const data = [
      {id: '1', name: '瑞金无锡医院', code: '1001', phone: '13102019201', address: '无锡市瑞金医院'},
      {id: '2', name: '瑞金无锡医院', code: '1002', phone: '13102019201', address: '无锡市瑞金医院'},
    ]
    return (
      <div className={styles.pageWrap}>
        <Button
          type='primary'
          style={{ marginBottom: '15px'}}
          onClick={() => {router.push(`/hospital/hospital-detail?type=create`)}}
        >新增医院</Button>
        <Table columns={this.columns} dataSource={data} rowKey={record => record.id}/>
      </div>
    );
  }
}

export default HospitalList;
