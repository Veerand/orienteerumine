class CreatePunkts < ActiveRecord::Migration
  def change
    create_table :punkts do |t|

      t.timestamps null: false
    end
  end
end
