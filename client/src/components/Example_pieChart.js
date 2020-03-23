import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Tooltip, Cell,
} from 'recharts';

const data = [
  { name: 'Followers', value: 15862 },
  { name: 'Following', value: 641 },
  { name: 'Likes', value: 3612 },
  { name: 'Tweets', value: 3612 },
];
const COLORS = ['#FF8042', '#00C49F', '#FFBB28', '#0088FE'];


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';
  

  render() {
    const { followers_count, friends_count, favourites_count, statuses_count  } = this.props
    const data = [
        { name: 'Followers', value: followers_count },
        { name: 'Following', value: friends_count },
        { name: 'Likes', value: favourites_count },
        { name: 'Tweets', value: statuses_count },
      ];
    return (
      <PieChart width={400} height={300} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={200}
          cy={135}
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip/>
      </PieChart>
    );
  }
}