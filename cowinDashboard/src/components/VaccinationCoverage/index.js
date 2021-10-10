// Write your code here

import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import {CustomHeading, GraphContainer} from './styledComponents'

const VaccinationCoverage = props => {
  const {coverageData} = props
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <GraphContainer>
      <CustomHeading>Vaccination Coverage</CustomHeading>
      <BarChart data={coverageData} margin={{top: 5}} width={900} height={400}>
        <XAxis dataKey="vaccineDate" tick={{stroke: 'gray', strokeWidth: 1}} />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{stroke: 'gray', strokeWidth: 1}}
        />
        <Legend wrapperStyle={{padding: 30}} />
        <Bar
          dataKey="dose1"
          name="Dose 1"
          fill="#5a8dee"
          barsize="20%"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          name="Dose 2"
          fill="#f54394"
          barSize="20%"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </GraphContainer>
  )
}

export default VaccinationCoverage
