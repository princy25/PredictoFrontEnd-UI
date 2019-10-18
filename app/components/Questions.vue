<template>
  <Page actionBarHidden="true">
    <StackLayout for="question in questionsFor">
      <FlexboxLayout
        alignItems="flex-start"
        justifyContent="flex-start"
        backgroundColor="#3c7ec7"
        padding="10 20"
      >
        <Label
          class="fa status"
          :text="'fa-long-arrow-left' | fonticon"
          style="color:white"
          @tap="goToHome"
          marginRight="20"
          verticalAlignment="center"
          horizontalAlignment="center"
        />
        <Label text="England Vs South Africa" color="white" verticalAlignment="center" />
      </FlexboxLayout>
      <FlexboxLayout alignItems="flex-end" justifyContent="flex-end">
        <Label
          text="Timer 1:44:32"
          borderRadius="50"
          marginRight="20"
          marginTop="10"
          padding="10"
          class="live"
          backgroundColor="#5065CB"
          color="#fff"
        />
      </FlexboxLayout>
      <StackLayout
        backgroundColor="white"
        borderWidth="2"
        bordercolor="gray"
        margin="20"
        height="auto"
        padding="10"
      >
        <Label
          marginBottom="20"
          width="100%"
          row="*"
          class="question-title"
          text="who will win the match"
        />
        <Label textAlignment="right" marginBottom="10" text="Q 1/5" />
        <FlexboxLayout
          alignItems="flex-start"
          marginBottom="15"
          justifyContent="space-between"
          class="predict-button-active"
        >
          <Label text="0-5 runs" />
          <Label text="Points 40" />
        </FlexboxLayout>
        <FlexboxLayout
          alignItems="flex-start"
          marginBottom="15"
          justifyContent="space-between"
          class="predict-button-gray"
        >
          <Label text="6-10 runs" />
          <Label text="Points 20" />
        </FlexboxLayout>
        <FlexboxLayout
          alignItems="flex-start"
          marginBottom="15"
          justifyContent="space-between"
          class="predict-button-gray"
        >
          <Label text="11-15 runs" />
          <Label text="Points 60" />
        </FlexboxLayout>
        <FlexboxLayout
          alignItems="flex-start"
          marginBottom="15"
          justifyContent="space-between"
          class="predict-button-gray"
        >
          <Label text="16 or more runs" />
          <Label text="Points 80" />
        </FlexboxLayout>
        <FlexboxLayout alignItems="flex-start" justifyContent="space-between" marginBottom="20">
          <Label
            text="Previous"
            backgroundColor="#b7b7b7"
            padding="3 30"
            borderRadius="5"
            color="#fff"
          />
          <Label
            text="Next"
            backgroundColor="#318ec4"
            padding="3 40"
            borderRadius="5"
            color="#fff"
          />
        </FlexboxLayout>
      </StackLayout>
      <FlexboxLayout alignItems="center" justifyContent="center" ng-disabled>
        <Button
          text="Submit"
          backgroundColor="#57a173"
          color="#fff"
          borderRadius="5"
          @tap="goToViewprediction"
          padding="10 30"
          margin="10"
        />
      </FlexboxLayout>
    </StackLayout>
  </Page>
</template>

<script>
import Vue from "nativescript-vue";
import Home from "./Home";
import Viewprediction from "./Viewprediction";
export default {
  methods: {
    goToViewprediction() {
      this.$navigateTo(Viewprediction);
    },
    goToHome() {
      this.$navigateTo(Home, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 100,
          curve: "easeIn"
        }
      });
    },
    onButtonTap(data, id) {
      this.answer.push(data);
      console.log("This is answer", this.answer, id);
    },
    onButtonTap1(data) {
      console.log("This is second funcion", data);
    }
  },
  mounted() {
    console.log("ldjfldkfjldjfdlk", this.qId);
    this.questionId = this.qId;

    fetch("https://predicto.wohlig.co.in/api/Question/getQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        matchId: this.questionId
      })
    })
      .then(response => response.json())
      .then(data => {
        this.questionsFor = data.data.question;
        console.log("result of question", data.data);
      });
  },
  props: ["qId"],
  data() {
    return {
      answer: [],
      questionId: "",
      questionsFor: []
    };
  }
};
</script>

<style>
.predict-button-active {
  background-color: #57a173;
  border-radius: 5;
  color: #fff;
  font-size: 16;
  margin: 5px;
  padding: 30px;
}

.predict-button-gray {
  background-color: #ececec;
  border-radius: 5;
  color: #717070;
  font-size: 16;
  margin: 5px;
  padding: 30px;
}

.live {
  padding-right: 10;
  background-image: linear-gradient(to right, #be3073, #fa1642);
  color: #fff;
  font-size: 14;
}

Page {
  background-color: #f5f4fa;
  font-family: "Khand-Medium", "Khand Medium";
  font-size: 16;
}
</style>