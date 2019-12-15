class CreateTweetImages < ActiveRecord::Migration[5.2]
  def change
    create_table :tweet_images do |t|
      t.string :img
      t.references :tweet, null: false, foreign_key:true
      t.timestamps
    end
  end
end
