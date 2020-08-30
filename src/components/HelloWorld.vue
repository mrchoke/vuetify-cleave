<template>
  <v-container>
    <v-toolbar dark>
      <v-toolbar-title>Vuetify and Cleave.js DEMO</v-toolbar-title>
    </v-toolbar>
    <v-row>
      <v-col cols="12" v-for="(input, i) in inputs" :key="i">
        <v-text-field v-model="model[i]" :label="input.name" v-cleave="input.options" :placeholder="input.placeholder"> </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      model: [],
      inputs: [
        {
          name: 'Credit card',
          options: { creditCard: true },
          placeholder: '1234 56789 012345'
        },
        {
          name: 'Phone number ',
          options: { phone: true, delimiter: '-', phoneRegionCode: 'TH' },
          placeholder: '081-111-1111'
        },
        {
          name: 'Date ',
          options: { date: true, delimiter: '/', datePattern: ['d', 'm', 'Y'] },
          placeholder: '12/09/2020'
        },
        {
          name: 'Time ',
          options: { time: true, datePattern: ['h', 'm', 's'] },
          placeholder: '24:04:04'
        },
        {
          name: 'Number with Comma',
          options: { numeral: true, numeralThousandsGroupStyle: 'thousand' },
          placeholder: '100,000,000.00'
        },
        {
          name: 'Thai National ID card',
          options: { numericOnly: true, delimiter: '-', blocks: [1, 4, 5, 2, 1] },
          placeholder: '1-1234-12345-12-1'
        },
        {
          name: 'Prefix',
          options: { prefix: 'PRO99', delimiter: '-', blocks: [5, 3, 3, 3], uppercase: true },
          placeholder: 'PRO99-ACC-ABC-CDE'
        }
      ]
    })
  }
</script>
