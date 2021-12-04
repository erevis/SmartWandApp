import { SafeAreaView, StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react';
import { ProgressBar, Colors } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';
import {
  LineChart,
  ProgressChart,
} from 'react-native-chart-kit';

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
            <TouchableOpacity>
              <Card style={styles.cards}>

                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                  <Text style={{ paddingHorizontal: 20, textAlign: 'center' }}>
                    Ongoing Exercise
                  </Text>

                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, }}>
                  <Text style={{ paddingHorizontal: 20, textAlign: 'center' }} > Exercise 1 </Text>
                </View>

                <View style={styles.progressBar}>
                  <ProgressBar progress={0.65} color={Colors.blue800} />
                </View>


                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, }}>
                  <Text style={{ paddingHorizontal: 20, textAlign: 'center' }}> 65% Complete </Text>
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
                  <Text style={{ fontSize: 24 }} > M </Text>
                </View>
                <View style={styles.circle_inactive}>
                  <Text style={{ fontSize: 24 }} > T </Text>
                </View>
                <View style={styles.circle_active}>
                  <Text style={{ fontSize: 24 }} > W </Text>
                </View>
                <View style={styles.circle_active}>
                  <Text style={{ fontSize: 24 }} > T </Text>
                </View>
                <View style={styles.circle_active}>
                  <Text style={{ fontSize: 24 }} > F </Text>
                </View>
                <View style={styles.circle_inactive}>
                  <Text style={{ fontSize: 24 }} > S </Text>
                </View>
                <View style={styles.circle_inactive}>
                  <Text style={{ fontSize: 24 }} > S </Text>
                </View>
              </View>

              <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, }}>
                <Text style={{ paddingHorizontal: 20, textAlign: 'center' }}> Monthky </Text>
              </View>
              <View style={styles.container}>
                
              </View>
            </Card>
          </View>

          <View>
            <Card style={styles.cards}>

              <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, marginBottom: 5, width: 612, height: 70, borde: 5, }}>
                <Text style={{ paddingHorizontal: 20, textAlign: 'center' }}> Pain Level </Text>
              </View>
              <View>
                <LineChart
                  data={{
                    labels: [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                      'Saturday',
                      'Sunday',
                    ],
                    datasets: [
                      {
                        data: [10, 8, 6, 7, 4, 3],
                        strokeWidth: 2,
                      },
                    ],
                  }}
                  width={Dimensions.get('window').width - 80}
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
  // scrollView: {
  //   backgroundColor: '#ADD8E6',
  //   paddingLeft: 20,
  //   // horizocntal: 'true',
  //   //automaticallyAdjustInsets: 'true',
  //   paginEnabled: 'true',
  //   scrollEnabled: 'true',
  //   declerationRate: '0',
  //   snapToInterval: 200,
  //   snapToAlignment: 'center',

  // },
  cards: {
    //display: 'flex',
    alignItems: 'center',
    maxWidth: '150px',
    width: 130,
    height: 130,
    marginBottom: 10,
    marginLeft: 20,
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  circle_active: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderColor: "blue",
    backgroundColor: "blue",
    marginLeft: 5,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',

  },
  circle_inactive: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor: "white",
    marginLeft: 5,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',

  },

});