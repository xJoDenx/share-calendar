class CreateCasts < ActiveRecord::Migration[5.2]
  def change
    create_table :casts do |t|
      t.string :name, default: "", null: false
      t.references :event, foreign_key: true
      t.timestamps
    end
  end
end
