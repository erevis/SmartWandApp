import { SafeAreaView, StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react';
import { ProgressBar, Colors } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';
import {
  LineChart,
  ProgressChart,
  ContributionGraph,
} from 'react-native-chart-kit';
const screenWidth = Dimensions.get("window").width;

export function Overview() {

  return (
    <SafeAreaView>

      <View style={styles.container}>
        <Text style={styles.pageTitle} >Progress Overview</Text>
      </View>
      <View>
        <ScrollView
          scrollEventThrottle={16}
        >
          <View>

          <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
            <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 20, marginBottom: 40}}>
              Ongoing Exercises
            </Text>
          </View>
            <TouchableOpacity>
            
              <Card style={styles.cards}>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, }}>
                  <Text style={{ marginBottom: 10, textAlign: 'center' }} > Exercise 1 - 12/2</Text>
                </View>

                <View >
                  <ProgressBar progress={0.65} color={'#202C40'}
    width={'100%'}
    />
                </View>


                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, }}>
                  <Text style={{ paddingHorizontal: 20, textAlign: 'center' }}> 65% Complete </Text>
                </View>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity>
              <Card style={styles.cards}>

                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, }}>
                  <Text style={{ marginBottom: 10, textAlign: 'center' }} > Exercise 2 - 12/1</Text>
                </View>

                <View >
                  <ProgressBar progress={0.65} color={'#202C40'} />
                </View>


                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, }}>
                  <Text style={{ paddingHorizontal: 20, textAlign: 'center' }}> 35% Complete </Text>
                </View>
              </Card>
            </TouchableOpacity>

          </View>

          <View>
            <Card style={styles.cards}>
              <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, }}>
                <Text style={{ paddingHorizontal: 20, textAlign: 'center' }} > Activity </Text>
              </View>

              <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, }}>
                <Text style={{ paddingHorizontal: 20, textAlign: 'center' }}> Weekly </Text>
              </View>
              <View style={styles.container}>
                <View style={styles.circle_active}>
                  <Text style={{color:'white', fontSize: 24, textAlign: 'center', }} > M </Text>
                </View>
                <View style={styles.circle_inactive}>
                  <Text style={{color:'#202C40', fontSize: 24, textAlign: 'center', }} > T </Text>
                </View>
                <View style={styles.circle_active}>
                  <Text style={{color:'white', fontSize: 24, textAlign: 'center', }} > W </Text>
                </View>
                <View style={styles.circle_active}>
                  <Text style={{color:'white', fontSize: 24, textAlign: 'center', }} > T </Text>
                </View>
                <View style={styles.circle_active}>
                  <Text style={{color:'white', fontSize: 24, textAlign: 'center', }} > F </Text>
                </View>
                <View style={styles.circle_inactive}>
                  <Text style={{color:'#202C40', fontSize: 24, textAlign: 'center', }} > S </Text>
                </View>
                <View style={styles.circle_inactive}>
                  <Text style={{color:'#202C40', fontSize: 24, textAlign: 'center', }} > S </Text>
                </View>
              </View>

              <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, }}>
                <Text style={{ paddingHorizontal: 20, textAlign: 'center', }}> Monthly </Text>
              </View>
                <ContributionGraph
                  values={[
                    { date: '2021-10-02', count: 1 },
                    { date: '2021-10-03', count: 2 },
                    { date: '2021-10-04', count: 3 },
                    { date: '2021-11-09', count: 4 },
                    { date: '2021-11-12', count: 5 },
                    { date: '2021-11-16', count: 2 },
                    { date: '2021-12-17', count: 3 },
                    { date: '2021-12-21', count: 2 },
                    { date: '2021-11-22', count: 4 },
                    { date: '2021-12-25', count: 2 },
                    { date: '2021-12-30', count: 4 },
                  ]}
                  endDate={new Date('2021-12-31')}
                  numDays={93}
                  width={screenWidth - 60}
                  height={220}
                  chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(32, 44, 64, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                  }}
                />
            </Card>
          </View>

          <View>
            <Card style={styles.cards}>

              <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, }}>
                <Text style={{ paddingHorizontal: 20, textAlign: 'center' }} > Pain Level </Text>
              </View>
              <View>
                <LineChart
                  data={{
                    labels: [
                      'Mon',
                      'Tue',
                      'Wed',
                      'Thu',
                      'Fri',
                      'Sat',
                      'Sun',
                    ],
                    datasets: [
                      {
                        data: [10, 8, 6, 7, 4, 3],
                        strokeWidth: 2,
                      },
                    ],
                  }}
                  width={screenWidth - 75}
                  height={240}
                  chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                      flex: 1,
                      borderRadius: 16,
                    },
                  }}
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                  }}
                />

              </View>
            </Card>
          </View>



        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
  },
<<<<<<< HEAD
  // scrollView: {
  //   backgroundColor: '#ADD8E6',
  //   paddingLeft: 20,
  //   horizocntal: 'true',
  //   automaticallyAdjustInsets: 'true',
  //   paginEnabled: 'true',
  //   scrollEnabled: 'true',
  //   declerationRate: '0',
  //   snapToInterval: 200,
  //   snapToAlignment: 'center',

  // },
=======
>>>>>>> 2137ed192c0517715dae0e03b345054160aa1590
  cards: {
    //display: 'flex',
    alignItems: 'center',
    maxWidth: '150px',
    width: 130,
    height: 130,
    marginBottom: 10,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  circle_active: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderColor: "#202C40",
    backgroundColor: "#202C40",
    marginLeft: 5,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',

  },
  circle_inactive: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderWidth: 2,
    borderColor: "#202C40",
    backgroundColor: "white",
    marginLeft: 5,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',

  },

});