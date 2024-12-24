document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', function() {
      const title = this.getAttribute('data-title');
      const price = this.getAttribute('data-price');
      const image = this.getAttribute('data-image');
      viewProduct(title, price, image);
    });
  });
  