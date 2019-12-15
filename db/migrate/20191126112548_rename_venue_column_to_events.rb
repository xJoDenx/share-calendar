class RenameVenueColumnToEvents < ActiveRecord::Migration[5.2]
  def change
    rename_column :events, :venue, :address
  end
end
