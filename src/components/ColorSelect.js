/*global chrome*/
import React, { Component } from 'react'
import ColorOption from './ColorOption'
import $ from 'jquery/dist/jquery.min.js'

class ColorSelect extends Component {

  /**
  * @description Au changement de la valeur du sélect, changement de l'apparence dans l'extension et la page web
  */
  handleChange = () => {
    // On récupère la valeur sélectionnée
    let select = $("#colorSelect");
    let colorOption = select.val();

    // On supprime l'ancien css
    select.removeClass (function (index, className) {
        return (className.match (/(^|\s)color-\S+/g) || []).join(' ');
    });

    // On ajoute le nouveau css
    select.addClass("color-" + colorOption);

    // Même chose pour l'icone
    let iconColor = $("#colorBrush");
    iconColor.removeClass (function (index, className) {
        return (className.match (/(^|\s)color-\S+/g) || []).join(' ');
    });
    iconColor.addClass("color-" + colorOption);

    // Si chrome n'est pas défini
    if (typeof chrome === "undefined" || typeof chrome.tabs === "undefined"){
      window.alert("Impossible d'utiliser les fonctionnalités de chrome");
      return;
    }

    // On applique la modification à la tab courante
    chrome.tabs.executeScript({
      code: `console.log('location:', window.location.href);`
    })
  }

  /**
  * @description Render du ColorSelect
  * @return {ColorSelect}
  */
  render () {

    const colors = ["blanc", "bleu", "turquoise", "vert", "jaune", "rouge", "rose", "violet"];

    return (
      <select name="backgoundcolor" id="colorSelect" onChange={this.handleChange}>
      {
        colors.map(function(color, index) {
          return (<ColorOption color={color} key={color}/>);
        })
      }
      </select>
    )
  }
}

export default ColorSelect
