class AddProducts < ActiveRecord::Migration[6.0]
    def change

    	Product.create :title => 'Hawaiian', :description => 'This is a Hawaiian pizza', :price => 400, :size => 30, :is_spicy => false, :is_veg => false, :is_best_offer => true, :path_to_photo => '/images/hawaiian.jpg'

    	Product.create :title => 'Bavarian', :description => 'This is a Bavarian pizza', :price => 450, :size => 30, :is_spicy => true, :is_veg => false, :is_best_offer => false, :path_to_photo => '/images/bavarian.jpg'

	  	Product.create :title => 'Vegeterian', :description => 'This is a Vegeterian pizza', :price => 350, :size => 40, :is_spicy => false, :is_veg => true, :is_best_offer => false, :path_to_photo => '/images/vegeterian.jpg'


  	end

end
