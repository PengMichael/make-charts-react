import React, { Component } from 'react';
import { Row, Col, Select, Icon } from 'antd'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import  './dndChartsPanel.css'
import echartConfig from './echartConfig';
/* import DropConfigChart from './DropConfigChart';
import DropElement from './DropElement';
import update from 'immutability-helper';


import ConfigDropBox from './ConfigDropBox'
import DragElement from './DragElement'*/

const Option = Select.Option;
const dragItem = 'item';
const colorSet = ['#9CC5B0', '#C9856B', '#6F9FA7', '#334553', '#B34038', '#7D9D85', '#C1883A']

const lineData = [
    { name: '年销量', type: 'string', value: 'year', id: 0, data: ['2013', '2014', '2015', '2016', '2017', '2018'], color: '#9CC5B0', chart: 'line' },
    { name: '华北', type: 'value', value: 'h', id: 1, data: [40, 80, 20, 120, 140, 50], color: '#C9856B', chart: 'line' },
    { name: '华东', type: 'value', value: 'd', id: 2, data: [140, 180, 120, 40, 50, 150], color: '#6F9FA7', chart: 'line' },
    { name: '华南', type: 'value', value: 'n', id: 3, data: [110, 143, 68, 90, 120, 130], color: '#334553', chart: 'line' }
];
const pieData = [
    { value: 335, name: '京东', type: 'value', id: 0, color: '#9CC5B0' },
    { value: 310, name: '菜鸟', type: 'value', id: 1, color: '#C9856B' },
    { value: 234, name: '总部', type: 'value', id: 2, color: '#6F9FA7' },
    { value: 135, name: '小电商', type: 'value', id: 3, color: '#334553' },
    { value: 1548, name: '大电商', type: 'value', id: 4, color: '#B34038' }
]
const chartType = [
    { value: 'line', name: '折线图' },
    { value: 'bar', name: '柱状图' },
    { value: 'pie', name: '饼图' }
]
export default class DndChartsPanel extends Component {
  constructor(props) {
   super(props);
   
      
  }
  state = {
    
  }
  onSelectChartType(type) {
      if (type === 'pie') {
          this.setState({ itemList: pieData, dropConfig: echartConfig[type], chartType: type })
      } else {
          const nlist = [...lineData];
          for (let i = 0; i < nlist.length; i++) {
              nlist[i].chart = type;
          }
          this.setState({ itemList: nlist, dropConfig: echartConfig[type], chartType: type })
      }
  }
  render() {

    return (
      <DndProvider backend={HTML5Backend}>
        <div className="chartsPanel"> 
            <Row gutter={8}>
              <Col sm={6}>
                  <Select
                      className='chartTypeSelect'
                      defaultValue={chartType[0].value}
                      onChange={(e) => this.onSelectChartType(e)}
                      style={{ width: '100%' }}>{
                          chartType.map((item, index) => <Option key={index} value={item.value}>
                              <div>
                                  {item.name}
                                  <p style={{ color: '#999', display: 'none' }}>描述...</p>
                                  <div className='charIconBox' style={{ display: 'none' }}>
                                      {item.value === 'line' ? <Icon className='charIcon' type="line-chart" /> : ''}
                                      {item.value === 'bar' ? <Icon className='charIcon' type="bar-chart" /> : ''}
                                      {item.value === 'pie' ? <Icon className='charIcon' type="pie-chart" /> : ''}
                                  </div>
                              </div>
                          </Option>)
                      }
                  </Select>
              </Col>
            </Row>
        </div>
      </DndProvider>
    )
  }
}