class CreateTulemus < ActiveRecord::Migration
  def change
    create_table :tulemus do |t|

      t.timestamps null: false
    end
  end
end
