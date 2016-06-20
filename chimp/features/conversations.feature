@watch
Feature: I want to record this conversation

  Scenario: Conversation scenario GWT
    Given I say hello
    When She responds how are you
    Then I say good thanks
    And also ask how they are
    But forget to say my name

  Scenario: Conversation scenario with bullet points
    * I say hello
    * She responds how are you
    * I say good thanks
    * also ask how they are
    * forget to say my name

  Scenario: Conversation scenario with variables
    * I say "Hello"
    * She responds "how are you"
    * I say "good thanks"
    * also ask "How about you?"
    * forget to say "by the way my name is Alejandro"

  Scenario Outline: Conversation scenario examples and pass variable
    Given I say "<precondition>"
    When I say "<action>"
    Then I say "<reaction>"

    Examples: 
      | precondition | action        | reaction     |
      | hello        | how are you   | good thanks  |
      | hi           | how you doing | great cheers |
      | hola         | como estas    | bien gracias |
