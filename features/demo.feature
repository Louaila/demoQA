Feature: Remplir un formulaire
  Scenario: Soumission réussie

    Given que je suis sur la page d'accueil de l'application
    When je navigue vers le menu "Forms"
    And je clique sur "Practice Form"
    Then je vois le formulaire "Practice Form"
    
    When je remplis les champs avec des informations valides
    And je sélectionne le genre, la date de naissance, les hobbies, l'état et la ville
    Then le formulaire est correctement rempli
