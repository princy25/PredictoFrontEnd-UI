<template>
    <page actionBarHidden="true">
        <FlexboxLayout flexDirection="column" height="100%" width="100%">
            <Header />
            <GridLayout rows="*" height="100%">
                <StackLayout class="view-prediction">
                    <ListView class="list-schedule" for="match in matche"
                        separatorColor="transparent" 
                        style="height:100%">
                        <v-template>
                            <ScrollView>
                                <StackLayout>
                                    <GridLayout columns="auto,2*, *, auto,2*"
                                        rows="*, 2*, *,2*"
                                        class="match-container">
                                        <Label :text="match.matchNumber"
                                            row="0" col="0" colSpan="2"
                                            marginLeft="10" marginTop="10"
                                            fontSize="12" />
                                        <Label  :text="match.startingTime"
                                            row="0" col="3" class="live"
                                            colSpan="3"
                                            textAlignment="center" />

                                        <Label :text="match.team1.shortName"
                                            row="1" col="0" class="shortname"
                                            borderRadius="5" margin="10"
                                            fontSize="8" padding="6 5"
                                            verticalAlignment="center"
                                            textAlignment="center" />
                                        <Label :text="match.team1.teamName"
                                            row="1" verticalAlignment="center"
                                            col="1" fontWeight="bold"
                                            fontSize="12" />
                                        <Label text="vs" row="1" col="2"
                                            verticalAlignment="center"
                                            textAlignment="center"
                                            fontWeight="bold" fontSize="12" />

                                        <Label :text="match.team2.shortName"
                                            row="1" col="3" class="shortname"
                                            borderRadius="5" margin="10"
                                            fontSize="8" padding="6 5"
                                            textAlignment="center" />
                                        <Label :text="match.team2.teamName"
                                            row="1" verticalAlignment="center"
                                            col="4" fontWeight="bold"
                                            fontSize="12" />
                                        <Label :text="match.place" row="2"
                                            col="0" colSpan="4"
                                            marginLeft="10" fontSize="12" />
                                        <Label :text="match.startingTime"
                                            row="2" col="1" colSpan="4"
                                            textAlignment="right"
                                            marginRight="10" fontSize="12" />

                                        <Button text="Start Predict" @tap="onItemTap(match)"
                                            class="predict-button" row="3"
                                            colSpan="5" 
                                            background="linear-gradient(to right, #0EA948, #0CAAA4)"/>
                                    </GridLayout>
                                </StackLayout>
                            </ScrollView>
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
    import Question from "./Questions";
    import Footerm from "./Footerm";

    export default {

            methods: {
                onItemTap: function(args) {
                    console.log("dlfjdlfjdljfldjf",args)
                    this.$navigateTo(Question, {
                        props: {
                            qId: args._id
                        }
                    });
                },
                goToQuestionPage(){
                    console.log("TFYGujhijoihugyfv")
                }
            },
        mounted() {
            fetch("https://predicto.wohlig.co.in/api/Match/allMatches", {
                    method: "POST"
                })
                .then(response => response.json())
                .then(data => {
                    this.matche = data.data;
                });
        },

        data() {
            return {
                matche: []
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
    // @import "scss/variable.scss";
    /* $view-prediction: aqua !default; */

    Page {
        background-Color: #f2f4fb;
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
        separatorColor: transparent;
    }

    .list-group-item {
        border-radius: 5;
    }

    .match-container {
        margin-bottom: 15;
        border-radius: 5;
        background-Color: #fff;
        separatorColor: transparent;
        box-shadow: 10px 10px 5px grey;
    }

    .description-label {
        margin-bottom: 15;
    }

    .live {
        background: linear-gradient(to right, #BE3073, #FA1642);
        color: #fff;
        font-size: 12;
        border-radius: 5;
        padding: 5 10;
        vertical-align: center;
        margin-right: 10;
        margin-top: 10;
        font-weight: bold;
        width: 100%;
    }

    .shortname {
        background: linear-gradient(to right, #397DC8, #5461CB);
        color: #fff;
        vertical-align: center;
        textAlignment: center;
    }

    .predict-button {
        margin-top: 10;
        border-radius: 0 0 5 5;
        color: #fff;
        font-size: 14;
    }
    /* .view-prediction {
        background-color: $view-prediction;
    } */
</style>