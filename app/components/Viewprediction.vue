<template>
  <Page actionBarHidden="true">
    <FlexboxLayout flexDirection="column" height="100%" width="100%">
      <Header />
      <GridLayout rows="*" height="100%">
        <StackLayout>
          <ListView
            class="list-schedule"
            for="match in matches"
            separatorColor="transparent"
            @itemTap="onItemTap"
            style="height:100%"
          >
            <v-template>
              <StackLayout>
                <GridLayout
                  columns="auto,2*, *, auto,2*"
                  rows="*, 2*, *,2*"
                  class="match-container"
                >
                  <Label
                    :text="match.matchIndex"
                    row="0"
                    col="0"
                    colspan="2"
                    marginLeft="10"
                    marginTop="10"
                    fontSize="12"
                  />
                  <Label
                    :text="match.points"
                    row="0"
                    col="3"
                    class="live"
                    colspan="3"
                    color="red"
                    ;
                    textAlignment="center"
                  />
                  <Image
                    src="https://play.nativescript.org/dist/assets/img/NativeScript_logo.png"
                    row="1"
                    col="0"
                    borderRadius="5"
                    margin="10"
                    height="30"
                    width="30"
                  />
                  <Label
                    :text="match.firstMatch"
                    row="1"
                    verticalAlignment="center"
                    col="1"
                    fontWeight="bold"
                    fontSize="12"
                  />
                  <Label
                    text="vs"
                    row="1"
                    col="2"
                    verticalAlignment="center"
                    textAlignment="center"
                    fontWeight="bold"
                    fontSize="12"
                  />
                  <Image
                    src="https://play.nativescript.org/dist/assets/img/NativeScript_logo.png"
                    row="1"
                    col="3"
                    borderRadius="5"
                    margin="10"
                    height="30"
                    width="30"
                    @tap="goToLeatherBoard"
                  />
                  <Label
                    :text="match.secondMatch"
                    row="1"
                    verticalAlignment="center"
                    col="4"
                    fontWeight="bold"
                    fontSize="12"
                  />
                  <Label
                    :text="match.place"
                    row="2"
                    col="0"
                    colspan="4"
                    marginLeft="10"
                    fontSize="12"
                  />
                  <Label
                    :text="match.time"
                    row="2"
                    col="1"
                    colspan="4"
                    textAlignment="right"
                    marginRight="10"
                    fontSize="12"
                  />

                  <Label
                    text="View Prediction"
                    class="predict-button"
                    row="3"
                    col="2"
                    colspan="5"
                    @tap="goToQuestion"
                    background
                    textAlignment="center"
                  />
                </GridLayout>
              </StackLayout>
            </v-template>
          </ListView>
        </StackLayout>
      </GridLayout>
      <Footerm />
    </FlexboxLayout>
  </Page>
</template>


<script>
import Vue from "nativescript-vue";
import Header from "./Header";
import Footerm from "./Footerm";
import Question from "./Questions";

export default {
  methods: {
    goToQuestion() {
      this.$navigateTo(Question);
    }

    // onItemTap: function(args) {
    //     console.log("Item with index: " + Object.values(args) +
    //         " tapped");
    //     console.log();
    // }
  },

  data() {
    return {
      matches: [
        {
          points: "Point 120",
          matchIndex: "Match1",
          firstMatch: "England",
          firstMatchlogoSrc:
            "https://play.nativescript.org/dist/assets/img/flags/au.png",
          secondMatch: "South Africa",
          secondMatchlogoSrc:
            "https://play.nativescript.org/dist/assets/img/flags/au.png",
          place: "Kennington Oval, London",
          time: "May 30 2019"
        },
        {
          points: "Point 120",
          matchIndex: "Match1",
          firstMatch: "England",
          firstMatchlogoSrc:
            "https://play.nativescript.org/dist/assets/img/flags/au.png",
          secondMatch: "South Africa",
          secondMatchlogoSrc:
            "https://play.nativescript.org/dist/assets/img/flags/au.png",
          place: "Kennington Oval, London ",
          time: "May 30 2019"
        }
      ]
    };
  },
  components: {
    Header,
    Footerm
  }
};
</script>
<style lang="scss" scoped>
// @import "scss/main.scss";

Page {
  background-color: #f2f4fb;
  font-family: "Khand-Medium", "Khand Medium";
  font-size: 16;
}

.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.list-schedule {
  margin: 20;
  separatorcolor: transparent;
}

.list-group-item {
  border-radius: 5;
}

.match-container {
  margin-bottom: 15;
  border-radius: 5;
  background-color: #fff;
  separatorcolor: transparent;
  box-shadow: 10px 10px 5px grey;
}

.description-label {
  margin-bottom: 15;
}

.live {
  font-size: 12;
  border-radius: 5;
  padding: 5 10;
  vertical-align: center;
  margin-right: 10;
  margin-top: 10;
  font-weight: bold;
  width: 100%;
  background: transparent;
}

.predict-button {
  margin: 10;
  border-radius: 5;
  background: linear-gradient(to right, #be3073, #fa1642);
  color: #fff;
  font-size: 14;
  padding: 5 10;
}
</style>