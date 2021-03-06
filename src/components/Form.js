import React, { Component } from "react";

const initialState = {
  identifiant: "",
  election: "",
  annee: "",
  mois: "",
  departement: "",
  circ: "",
  tour: "",
  type: "",
  rang: "",
  nom: "",
  prenom: "",
  sexe: "",
  age: "",
  profession: "",
  mandat_public_en_cours: "",
  mandat_public_passe: "",
  assoc: "",
  autre_statut: "",
  decorations: "",
  partis_en_soutien: "",
  liste: "",
};

class Form extends Component {
  state = initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    /*
         La ligne suivante remet à zéro le formulaire dès que l'on submit.
         Ne pas utiliser si l'on souhaite voir les champs remplis en même
         temps que la recherche.
         À compléter avec un bouton CLEAR permettant de reload le form
      */
    this.setState(initialState);
  };

  render() {
    const {
      identifiant,
      election,
      annee,
      mois,
      departement,
      circ,
      tour,
      type,
      rang,
      nom,
      prenom,
      sexe,
      age,
      profession,
      mandat_public_en_cours,
      mandat_public_passe,
      assoc,
      autre_statut,
      decorations,
      partis_en_soutien,
      liste,
    } = this.state;
    return (
      /*
      <form>
        <label htmlFor="name">Name</label>
        <select
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
        >
          <option selected value={null}></option>
          <option value="testounet">testounet</option>
          <option value="toto">toto</option>
          <option value="test">test</option>
        </select>

        <label htmlFor="job">Job</label>
        <select
          type="text"
          name="job"
          id="job"
          value={this.state.job}
          onChange={this.handleChange}
        >
          <option selected value={null}></option>
          <option value="conseiller">conseiller</option>
          <option value="maire">maire</option>
          <option value="president">president</option>
        </select>

        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
      */
      <form>
        <label htmlFor="election">Élection</label>
        <select
          type="text"
          name="election"
          id="election"
          value={this.state.election}
          onChange={this.handleChange}
        >
          <option selected value={null}></option>
          <option value="L">Législatives</option>
          <option value="P">Présidentielles</option>
          <option value="M">Municipales</option>
        </select>

        <label htmlFor="annee">Année de l'élection</label>
        <select
          type="text"
          name="annee"
          id="annee"
          value={this.state.annee}
          onchange={this.state.handleChange}
        >
          <option value={null}></option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="1995">1995</option>
          <option value="1993">1993</option>
          <option value="1988">1988</option>
          <option value="1987">1987</option>
          <option value="1981">1981</option>
          <option value="1980">1980</option>
          <option value="1979">1979</option>
          <option value="1978">1978</option>
          <option value="1974">1974</option>
          <option value="1973">1973</option>
          <option value="1969">1969</option>
          <option value="1968">1968</option>
          <option value="1967">1967</option>
          <option value="1965">1965</option>
          <option value="1964">1964</option>
          <option value="1962">1962</option>
          <option value="1959">1959</option>
          <option value="1958">1958</option>
        </select>

        <label htmlFor="mois">Année de l'élection</label>
        <select
          type="text"
          name="annee"
          id="annee"
          value={this.state.mois}
          onchange={this.state.handleChange}
        >
          <option value={null}></option>
          <option value="01">Janvier</option>
          <option value="02">Février</option>
          <option value="03">Mars</option>
          <option value="04">Avril</option>
          <option value="05">Mai</option>
          <option value="06">Juin</option>
          <option value="07">Juillet</option>
          <option value="08">Août</option>
          <option value="09">Septembre</option>
          <option value="10">Octobre</option>
          <option value="11">Novembre</option>
          <option value="12">Décembre</option>
        </select>

        <label htmlFor="departement">Département</label>
        <select
          type="text"
          name="departement"
          id="departement"
          value={this.state.departement}
          onChange={this.handleChange}
        >
          <option selected value={null}></option>
          <option value="01">Ain</option>
          <option value="02">Aisne</option>
          <option value="03">Allier</option>
          <option value="04">Alpes-de-Haute-Provence</option>
          <option value="05">Hautes-Alpes</option>
          <option value="06">Alpes-Maritimes</option>
          <option value="07">Ardèche</option>
          <option value="08">Ardennes</option>
          <option value="09">Ariège</option>
          <option value="10">Aube</option>
          <option value="11">Aude</option>
          <option value="12">Aveyron</option>
          <option value="13">Bouches-du-Rhône</option>
          <option value="14">Calvados</option>
          <option value="15">Cantal</option>
          <option value="16">Charente</option>
          <option value="17">Charente-Maritime</option>
          <option value="18">Cher</option>
          <option value="19">Corrèze</option>
          <option value="2A">Corse-du-Sud</option>
          <option value="2B">Haute-Corse</option>
          <option value="21">Côte-d'Or</option>
          <option value="22">Côtes d'Armor</option>
          <option value="23">Creuse</option>
          <option value="24">Dordogne</option>
          <option value="25">Doubs</option>
          <option value="26">Drôme</option>
          <option value="27">Eure</option>
          <option value="28">Eure-et-Loir</option>
          <option value="29">Finistère</option>
          <option value="30">Gard</option>
          <option value="31">Haute-Garonne</option>
          <option value="32">Gers</option>
          <option value="33">Gironde</option>
          <option value="34">Hérault</option>
          <option value="35">Ille-et-Vilaine</option>
          <option value="36">Indre</option>
          <option value="37">Indre-et-Loire</option>
          <option value="38">Isère</option>
          <option value="39">Jura</option>
          <option value="40">Landes</option>
          <option value="41">Loir-et-Cher</option>
          <option value="42">Loire</option>
          <option value="43">Haute-Loire</option>
          <option value="44">Loire-Atlantique</option>
          <option value="45">Loiret</option>
          <option value="46">Lot</option>
          <option value="47">Lot-et-Garonne</option>
          <option value="48">Lozère</option>
          <option value="49">Maine-et-Loire</option>
          <option value="50">Manche</option>
          <option value="51">Marne</option>
          <option value="52">Haute-Marne</option>
          <option value="53">Mayenne</option>
          <option value="54">Meurthe-et-Moselle</option>
          <option value="55">Meuse</option>
          <option value="56">Morbihan</option>
          <option value="57">Moselle</option>
          <option value="58">Nièvre</option>
          <option value="59">Nord</option>
          <option value="60">Oise</option>
          <option value="61">Orne</option>
          <option value="62">Pas-de-Calais</option>
          <option value="63">Puy-de-Dôme</option>
          <option value="64">Pyrénées-Atlantiques</option>
          <option value="65">Hautes-Pyrénées</option>
          <option value="66">Pyrénées-Orientales</option>
          <option value="67">Bas-Rhin</option>
          <option value="68">Haut-Rhin</option>
          <option value="69">Rhône</option>
          <option value="70">Haute-Saône</option>
          <option value="71">Saône-et-Loire</option>
          <option value="72">Sarthe</option>
          <option value="73">Savoie</option>
          <option value="74">Haute-Savoie</option>
          <option value="75">Paris</option>
          <option value="76">Seine-Maritime</option>
          <option value="77">Seine-et-Marne</option>
          <option value="78">Yvelines</option>
          <option value="79">Deux-Sèvres</option>
          <option value="80">Somme</option>
          <option value="81">Tarn</option>
          <option value="82">Tarn-et-Garonne</option>
          <option value="83">Var</option>
          <option value="84">Vaucluse></option>
          <option value="85">Vendée</option>
          <option value="86">Vienne</option>
          <option value="87">Haute-Vienne</option>
          <option value="88">Vosges</option>
          <option value="89">Yonne</option>
          <option value="90">Territoire de Belfort</option>
          <option value="91">Essonne</option>
          <option value="92">Hauts-de-Seine</option>
          <option value="93">Seine-St-Denis</option>
          <option value="94">Val-de-Marne</option>
          <option value="95">Val-D'Oise</option>
          <option value="971">Guadeloupe</option>
          <option value="972">Martinique</option>
          <option value="973">Guyane</option>
          <option value="974">La Réunion</option>
          <option value="976">Mayotte</option>
        </select>

        <label htmlFor="circ">Circonscription</label>
        <select
          type="text"
          name="circonscription"
          id="circonscription"
          value={this.state.circ}
          onChange={this.handleChange}
        >
          <option selected value={null}></option>
          <option value="01">1ère</option>
          <option value="02">2nd</option>
          <option value="03">3ème</option>
          <option value="04">4ème</option>
          <option value="05">5ème</option>
          <option value="06">6ème</option>
          <option value="07">7ème</option>
          <option value="08">8ème</option>
          <option value="09">9ème</option>
          <option value="10">10ème</option>
          <option value="11">11ème</option>
          <option value="12">12ème</option>
          <option value="13">13ème</option>
        </select>

        <label htmlFor="tour">Tour</label>
        <select
          type="text"
          name="tour"
          id="tour"
          value={this.state.tour}
          onChange={this.handleChange}
        >
          <option selected value={null}></option>
          <option value="1">1er</option>
          <option value="2">2nd</option>
          <option value="3">3ème</option>
        </select>

        <label htmlFor="type">Type de document</label>
        <select
          type="text"
          name="type"
          id="type"
          value={this.state.type}
          onChange={this.handleChange}
        >
          <option selected value={null}></option>
          <option value="PF">Profession de foi</option>
          <option value="autre">Autre</option>
        </select>

        <label htmlFor="rang">Rang du candidat</label>
        <h6>Titulaire</h6>
        <input
          name="rang"
          type="radio"
          id="rang"
          value="titulaire"
          checked={this.state.rang}
          onChange={this.handleChange}
        />
        <h6>Suppléant</h6>
        <input
          name="rang"
          type="radio"
          id="rang"
          value="suppleant"
          checked={this.state.rang}
          onChange={this.handleChange}
        />
        <h6>Indifférencié</h6>
        <input
          name="rang"
          type="radio"
          id="rang"
          value={null}
          checked={this.state.rang}
          onChange={this.handleChange}
        />

        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          name="nom"
          id="nom"
          value={nom}
          onChange={this.handleChange}
        />

        <label htmlFor="prenom">Prénom</label>
        <input
          type="text"
          name="prenom"
          id="prenom"
          value={prenom}
          onChange={this.handleChange}
        />

        <label htmlFor="sexe">Sexe</label>
        <h6>Homme</h6>
        <input
          name="sexe"
          type="radio"
          id="sexe"
          value="homme"
          checked={this.state.sexe}
          onChange={this.handleChange}
        />
        <h6>Femme</h6>
        <input
          name="sexe"
          type="radio"
          id="sexe"
          value="femme"
          checked={this.state.sexe}
          onChange={this.handleChange}
        />
        <h6>Indifférencié</h6>
        <input
          name="sexe"
          type="radio"
          id="sexe"
          value={null}
          checked={this.state.sexe}
          onChange={this.handleChange}
        />

        <label htmlFor="age">Âge ou année de naissance</label>
        <input
          type="text"
          name="age"
          id="age"
          value={age}
          onChange={this.handleChange}
        />

        <label htmlFor="profession">Profession</label>
        <input
          type="text"
          name="profession"
          id="profession"
          value={profession}
          onChange={this.handleChange}
        />

        <label htmlFor="mandat_public_en_cours">Mandat public en cours</label>
        <select
          type="text"
          name="mandat_public_en_cours"
          id="mandat_public_en_cours"
          value={this.state.mandat_public_en_cours}
          onChange={this.handleChange}
        >
          <option selected value={null}></option>
          <option value="maire">Maire</option>
          <option value="depute">Député</option>
          <option value="president">Président</option>
          <option value="ministre">Ministre</option>
        </select>

        <label htmlFor="mandat_public_passe">Mandat public passé</label>
        <select
          type="text"
          name="mandat_public_passe"
          id="mandat_public_passe"
          value={this.state.mandat_public_passe}
          onChange={this.handleChange}
        >
          <option selected value={null}></option>
          <option value="maire">Maire</option>
          <option value="depute">Député</option>
          <option value="president">Président</option>
          <option value="ministre">Ministre</option>
        </select>

        <label htmlFor="assoc">Association</label>
        <select
          type="text"
          name="assoc"
          id="assoc"
          value={this.state.assoc}
          onChange={this.handleChange}
        >
          <option selected value={null}></option>
          <option value="LR">Les Républicains</option>
          <option value="socialist">Socialiste</option>
          <option value="independent">Indépendant</option>
          <option value="communiste">Communiste</option>
          <option value="religion">Religion</option>
        </select>

        <label htmlFor="autre_statut">Autre statut</label>
        <select
          type="text"
          name="autre_statut"
          id="autre_statut"
          value={this.state.autre_statut}
          onChange={this.handleChange}
        >
          <option selected value={null}></option>
          <option value="étudiant">Étudiant</option>
        </select>

        <label htmlFor="decorations">Décoration(s)</label>
        <h6>Oui</h6>
        <input
          name="decorations"
          type="radio"
          id="decorations"
          value="oui"
          checked={this.state.decorations}
          onChange={this.handleChange}
        />
        <h6>Non</h6>
        <input
          name="decorations"
          type="radio"
          id="decorations"
          value="non"
          checked={this.state.decorations}
          onChange={this.handleChange}
        />
        <h6>Non précisé</h6>
        <input
          name="decorations"
          type="radio"
          id="decorations"
          value={null}
          checked={this.state.decorations}
          onChange={this.handleChange}
        />

        <label htmlFor="partis_en_soutien">Parti(s) en soutien</label>
        <input
          type="text"
          name="partis_en_soutien"
          id="partis_en_soutien"
          value={partis_en_soutien}
          onChange={this.handleChange}
        />

        <label htmlFor="liste">Liste</label>
        <input
          type="text"
          name="liste"
          id="liste"
          value={liste}
          onChange={this.handleChange}
        />

        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
