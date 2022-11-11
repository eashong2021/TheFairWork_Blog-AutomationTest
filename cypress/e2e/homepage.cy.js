//A more concise and clean and most unlikely to break script
describe("Explore fairwork blog home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.title().should("eq", "TheFairWork Blog");
  });
  context("Header", () => {
    it("Should validate header", () => {
      cy.dataCy("thefairwork_logo").should("contains.text", "fairwork");
      cy.get('a[href$="about-us"] > p')
      .should("exist")
        .and("be.visible")
        .and("contain.text", "About Us");
      cy.get('a[href$="signup-options"] > p')
        .should("exist")
        .and("be.visible")
        .and("contain.text", "Sign Up");
      cy.get('a[href$="login"] > p')
        .should("exist")
        .and("be.visible")
        .and("contain.text", "Login");
      cy.dataCy("mainBanner")
        .should("exist")
        .and("be.visible")
        .and("contain.text", "TheFairWork Blog");
      cy.get(".Banner_description__Fd_42").should(
        "contain",
        "Explore new technologies, industry insights, stories of success, tools, and inspiration about the future of tech talent and the new world of work"
      );
      cy.dataCy("searchBar").type("Hello Freelancer");
    });
  });
  context("Categories", () => {
    it("Should verify name of each categories", () => {
      cy.get('[class="CategoryCard_content__gzX_p"]').each((list) => {
        const names = list.text();
        cy.wrap(names).should("contain", names);
      });
    });
  });
  context("Article", () => {
    it("Should verify that articles are visible to the user", () => {
      cy.contains("Articles")
        .scrollIntoView()
        .should("exist")
        .and("be.visible");
      cy.get("div.mb-4 > .container").should("exist").and("be.visible");
    });
  });
  context("Pagination", () => {
    it("Should verify that the home page has a pagination", () => {
      cy.get(".Article_pagination__dJcgg")
        .scrollIntoView()
        .should("exist")
        .and("be.visible");
    });
  });
  context("Most Read Articles", () => {
    it("Should verify that 'most read aticles' are visible in the home page", () => {
      cy.contains("Most Read Articles")
        .scrollIntoView()
        .should("exist")
        .and("be.visible");
      cy.get('[data-cy="most rc"]').should("exist").and("be.visible");
    });
  });
  context("Footer", () => {
    it("Should Verify that the footer is visible", () => {
      cy.get(".footerPadding")
        .scrollIntoView()
        .should("exist")
        .and("be.visible");
    });
  });
});








