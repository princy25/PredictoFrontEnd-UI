<template>
    <Page actionBarHidden="true">
        <StackLayout backgroundColor="#F5F4FA">
            <GridLayout backgroundColor="#E9E7F4" height="70" columns=" 3*,*"
                rows="*">
                <Label text="Lorem Ipsum is simply dummy" row="0" col="0"
                    verticalAlignment="center" />
                <button text="Rewards" backgroundColor="#5065CB" color="#fff"
                    row="0" col="1" textAlignment="center"
                    verticalAlignment="center" fontSize="12" />
            </GridLayout>
            <GridLayout backgroundColor="#FFFFFF" height="40"
                columns="*, 3*,*,*" rows="*">
                <Label text="Pic" row="0" col="0" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="Participate" row="0" col="1" textAlignment="left"
                    verticalAlignment="center" />
                <Label text="Points" row="0" col="2" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="Rank" row="0" col="3" textAlignment="center"
                    verticalAlignment="center" />
            </GridLayout>
            <GridLayout backgroundColor="#5065CB" height="40"
                columns="*, 3*,*,*" rows="*">
                <Label text="Pic" row="0" col="0" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="Princy Varghese" row="0" col="1"
                    textAlignment="left" verticalAlignment="center" />
                <Label text="112" row="0" col="2" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="01" row="0" col="3" textAlignment="center"
                    verticalAlignment="center" />
            </GridLayout>
            <GridLayout height="40"
                columns="*, 3*,*,*" rows="*">
                <Label text="Pic" row="0" col="0" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="Saraswati Gauda" row="0" col="1"
                    textAlignment="left" verticalAlignment="center" />
                <Label text="112" row="0" col="2" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="01" row="0" col="3" textAlignment="center"
                    verticalAlignment="center" />
            </GridLayout>
            <GridLayout height="40"
                columns="*, 3*,*,*" rows="*">
                <Label text="Pic" row="0" col="0" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="Roshan Ahire" row="0" col="1"
                    textAlignment="left" verticalAlignment="center" />
                <Label text="112" row="0" col="2" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="01" row="0" col="3" textAlignment="center"
                    verticalAlignment="center" />
            </GridLayout>
            <GridLayout height="40"
                columns="*, 3*,*,*" rows="*">
                <Label text="Pic" row="0" col="0" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="Pristina Varghese" row="0" col="1"
                    textAlignment="left" verticalAlignment="center" />
                <Label text="112" row="0" col="2" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="01" row="0" col="3" textAlignment="center"
                    verticalAlignment="center" />
            </GridLayout>
            <GridLayout height="40"
                columns="*, 3*,*,*" rows="*">
                <Label text="Pic" row="0" col="0" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="Dimple Ahire" row="0" col="1"
                    textAlignment="left" verticalAlignment="center" />
                <Label text="112" row="0" col="2" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="01" row="0" col="3" textAlignment="center"
                    verticalAlignment="center" />
            </GridLayout>
            <GridLayout height="40"
                columns="*, 3*,*,*" rows="*">
                <Label text="Pic" row="0" col="0" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="Prerna Anthony" row="0" col="1"
                    textAlignment="left" verticalAlignment="center" />
                <Label text="112" row="0" col="2" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="01" row="0" col="3" textAlignment="center"
                    verticalAlignment="center" />
            </GridLayout>
            <GridLayout height="40"
                columns="*, 3*,*,*" rows="*">
                <Label text="Pic" row="0" col="0" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="Manohar Anthony" row="0" col="1"
                    textAlignment="left" verticalAlignment="center" />
                <Label text="112" row="0" col="2" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="01" row="0" col="3" textAlignment="center"
                    verticalAlignment="center" />
            </GridLayout>
            <GridLayout height="40"
                columns="*, 3*,*,*" rows="*">
                <Label text="Pic" row="0" col="0" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="Hitesh Patil" row="0" col="1"
                    textAlignment="left" verticalAlignment="center" />
                <Label text="112" row="0" col="2" textAlignment="center"
                    verticalAlignment="center" />
                <Label text="01" row="0" col="3" textAlignment="center"
                    verticalAlignment="center" />
            </GridLayout>
            <StackLayout>
                <Button text="View Prediction" class="predict-button" row="3"
                    colSpan="5" @tap="goToViewPredict" />
            </StackLayout>
        </StackLayout>
    </Page>

</template>

<script>
    import Viewprediction from "./Viewprediction";
    export default {
        methods: {
            goToViewPredict() {
                this.$navigateTo(Viewprediction);
            }
        },
        data() {
            return {};
        }
    };
</script>

<style>
</style>