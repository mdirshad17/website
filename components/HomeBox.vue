<template>
  <v-flex class="vv-cta">
    <v-container>
      <v-card>
        <v-container>
          <v-row>
            <v-col>
              <v-img width="500px" class="align-end mentor" src="/images/mentoring.jpg"></v-img>
            </v-col>

            <v-col cols="auto" class="text-center pl-0">
              <v-row class="flex-column ma-0 fill-height" justify="center">
                <v-col class>
                  <h2
                    class="vv-subheading font-lato text-center text-md-right"
                  >An initiative by Front-End Foxes</h2>
                  <h3
                    class="vv-sub-subheading font-lato text-center text-md-right"
                  >Women helping women</h3>

                  <v-btn class="cta-react" color="secondary darken-1">React Workshops coming soon</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </v-flex>
</template>

<style scoped lang="scss">
.cta-react {
  margin-top: 30px;
}

.vv-card-text {
  padding-top: 15px;
}

.mentor {
  border-radius: 5px;
}

@media (max-width: 960px) {
  .cta-react {
    padding-top: 10px;
    text-align: center;
  }
}

@media (max-width: 420px) {
  .cta-react {
    padding-top: 10px;
    text-align: center;
  }
}
</style>
