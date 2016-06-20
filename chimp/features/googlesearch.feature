Feature: I want to learn cucumber and chimpJs

  Scenario: I want to search for chimpjs tutorials
    Given I navigate to "http://www.google.com"
    When I can search for "chimpjs"
    Then I am presented with pages about "Chimp"
