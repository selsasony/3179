var vg_1 = "2022deaths.vg.json";
vegaEmbed("#bar_chart", vg_1).then(function(result) {
    // Access the Vega view instance (you can find documentation here: https://vega.github.io/vega/docs/api/view/)
    var view = result.view;
}).catch(console.error);